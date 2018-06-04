﻿import * as React from 'react'
import * as moment from 'moment'
import { RouteComponentProps } from 'react-router'
import * as Navigator from '../../../../Framework/Signum.React/Scripts/Navigator'
import * as Finder from '../../../../Framework/Signum.React/Scripts/Finder'
import EntityLink from '../../../../Framework/Signum.React/Scripts/SearchControl/EntityLink'
import {ValueSearchControl, SearchControl, OrderType } from '../../../../Framework/Signum.React/Scripts/Search'
import { QueryDescription, SubTokensOptions } from '../../../../Framework/Signum.React/Scripts/FindOptions'
import { getQueryNiceName, PropertyRoute, getTypeInfos } from '../../../../Framework/Signum.React/Scripts/Reflection'
import {
    ModifiableEntity, EntityControlMessage, Entity,
    parseLite, getToString, JavascriptMessage
} from '../../../../Framework/Signum.React/Scripts/Signum.Entities'
import {
   OperationLogEntity
} from '../../../../Framework/Signum.React/Scripts/Signum.Entities.Basics'
import { API, WorkflowScriptRunnerState } from '../WorkflowClient'
import { CaseActivityEntity, WorkflowActivityType, DoneType, WorkflowPanelPermission, CaseActivityOperation } from '../Signum.Entities.Workflow'
import * as AuthClient from '../../Authorization/AuthClient'
import { UncontrolledTabs, Tab } from '../../../../Framework/Signum.React/Scripts/Components/Tabs';


interface WorkflowPanelPageProps extends RouteComponentProps<{}> {

}

export default class WorkflowPanelPage extends React.Component<WorkflowPanelPageProps, {  }> {

    componentWillMount() {
        AuthClient.asserPermissionAuthorized(WorkflowPanelPermission.ViewWorkflowPanel);
        Navigator.setTitle("WorkflowPanel State");
    }

    componentWillUnmount() {
        Navigator.setTitle();
    }

    render() {
        
        return (
            <div>
                <h2 className="display-6">Workflow Panel</h2>
              
                <UncontrolledTabs>
                    <Tab title="Script Runner" eventKey="scriptRunner">
                        <WorkflowScriptRunnerTab  />
                    </Tab>
                    <Tab title="Timers" eventKey="timers">
                        <a href="#" className="sf-button btn btn-link" onClick={e => { e.preventDefault(); window.open(Navigator.toAbsoluteUrl("~/scheduler/view")); }}>Open Scheduler Panel</a>
                    </Tab>
                </UncontrolledTabs>
           </div>
        );
    }
}


export class WorkflowScriptRunnerTab extends React.Component<{}, { scriptRunerState: WorkflowScriptRunnerState }> {

    componentWillMount() {
        this.loadState().done();
        AuthClient.asserPermissionAuthorized(WorkflowPanelPermission.ViewWorkflowPanel);
    }

    loadState() {
        return API.view()
            .then(s => this.setState({ scriptRunerState: s }));
    }

    handleStop = (e: React.MouseEvent<any>) => {
        e.preventDefault();
        API.stop().then(() => this.loadState()).done();
    }

    handleStart = (e: React.MouseEvent<any>) => {
        e.preventDefault();
        API.start().then(() => this.loadState()).done();
    }


    render() {

        var title = "WorkflowScriptRunner State";

        if (this.state == undefined)
            return <h4>{title} (loading...) </h4>;

        const srs = this.state.scriptRunerState;

        return (
            <div>
                <h4>{title}</h4>
                <div className="btn-toolbar">
                    {srs.running && <a href="#" className="sf-button btn btn-light active" style={{ color: "red" }} onClick={this.handleStop}>Stop</a>}
                    {!srs.running && <a href="#" className="sf-button btn btn-light" style={{ color: "green" }} onClick={this.handleStart}>Start</a>}
                </div >

                <div>
                    <br />
                    State: <strong>
                        {srs.running ?
                            <span style={{ color: "Green" }}> RUNNING </span> :
                            <span style={{ color: "Red" }}> STOPPED </span>
                        }</strong>
                    <br />
                    CurrentProcessIdentifier: {srs.currentProcessIdentifier}
                    <br />
                    ScriptRunnerPeriod: {srs.scriptRunnerPeriod} sec
                    <br />
                    NextPlannedExecution: {srs.nextPlannedExecution} ({srs.nextPlannedExecution == undefined ? "-None-" : moment(srs.nextPlannedExecution).fromNow()})
                    <br />
                    IsCancelationRequested: {srs.isCancelationRequested}
                    <br />
                    QueuedItems: {srs.queuedItems}
                </div>
                <br />
                <h4>Next activities to execute</h4>
                <SearchControl findOptions={{
                    queryName: CaseActivityEntity,
                    filterOptions: [
                        { columnName: "Entity.WorkflowActivity.(WorkflowActivity).Type", operation: "EqualTo", value: WorkflowActivityType.value("Script") },
                        { columnName: "Entity.DoneDate", operation: "EqualTo", value: null }
                    ],
                    columnOptionsMode: "Replace",
                    columnOptions: [
                        { columnName: "Id" },
                        { columnName: "StartDate" },
                        { columnName: "WorkflowActivity.(WorkflowActivity).Lane.Pool.Workflow" },
                        { columnName: "WorkflowActivity" },
                        { columnName: "Case" },
                        { columnName: "Entity.ScriptExecution.NextExecution" },
                        { columnName: "Entity.ScriptExecution.RetryCount" },
                    ],
                    orderOptions: [
                        { columnName: "Entity.ScriptExecution.NextExecution", orderType: "Ascending" }
                    ],
                    pagination: { elementsPerPage: 10, mode: "Firsts" }
                }} />
                <UncontrolledTabs>
                    <Tab title="Last operation logs" eventKey="logs">
                        <SearchControl findOptions={{
                            queryName: OperationLogEntity,
                            filterOptions: [
                                {
                                    columnName: "Operation", operation: "IsIn", value: [
                                        CaseActivityOperation.ScriptExecute,
                                        CaseActivityOperation.ScriptScheduleRetry,
                                        CaseActivityOperation.ScriptFailureJump,
                                    ]
                                },
                            ],
                            pagination: { elementsPerPage: 10, mode: "Firsts" }
                        }} />
                    </Tab>
                    <Tab title="Last executed activities" eventKey="lastActivities">
                        <SearchControl findOptions={{
                            queryName: CaseActivityEntity,
                            filterOptions: [
                                { columnName: "Entity.WorkflowActivity.(WorkflowActivity).Type", operation: "EqualTo", value: WorkflowActivityType.value("Script") },
                                { columnName: "Entity.DoneDate", operation: "DistinctTo", value: null }
                            ],
                            columnOptionsMode: "Replace",
                            columnOptions: [
                                { columnName: "Id" },
                                { columnName: "StartDate" },
                                { columnName: "WorkflowActivity.(WorkflowActivity).Lane.Pool.Workflow" },
                                { columnName: "WorkflowActivity" },
                                { columnName: "Case" },
                                { columnName: "Entity.DoneDate" },
                                { columnName: "Entity.DoneType" },
                                { columnName: "Entity.ScriptExecution.NextExecution" },
                                { columnName: "Entity.ScriptExecution.RetryCount" },
                            ],
                            orderOptions: [
                                { columnName: "Entity.DoneDate", orderType: "Descending" }
                            ],
                            pagination: { elementsPerPage: 10, mode: "Firsts" }
                        }} />
                    </Tab>
                </UncontrolledTabs>
            </div>
        );
    }
}




