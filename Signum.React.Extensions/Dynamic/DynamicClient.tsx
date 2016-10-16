
import * as React from 'react'
import { Route } from 'react-router'
import { ajaxPost, ajaxGet } from '../../../Framework/Signum.React/Scripts/Services';
import { EntitySettings, ViewPromise } from '../../../Framework/Signum.React/Scripts/Navigator'
import * as Navigator from '../../../Framework/Signum.React/Scripts/Navigator'
import { EntityData, EntityKind } from '../../../Framework/Signum.React/Scripts/Reflection'
import { EntityOperationSettings } from '../../../Framework/Signum.React/Scripts/Operations'
import * as Operations from '../../../Framework/Signum.React/Scripts/Operations'
import * as EntityOperations from '../../../Framework/Signum.React/Scripts/Operations/EntityOperations'
import { Entity } from '../../../Framework/Signum.React/Scripts/Signum.Entities'
import * as Constructor from '../../../Framework/Signum.React/Scripts/Constructor'
import { StyleContext } from '../../../Framework/Signum.React/Scripts/TypeContext'

import { ValueLine, EntityLine, EntityCombo, EntityList, EntityDetail, EntityStrip, EntityRepeater } from '../../../Framework/Signum.React/Scripts/Lines'
import { DynamicTypeEntity, DynamicTypeOperation, DynamicPanelPermission } from './Signum.Entities.Dynamic'
import * as AuthClient from '../Authorization/AuthClient'
import DynamicTypeEntityComponent from './Type/DynamicTypeEntity'
import * as OmniboxClient from '../Omnibox/OmniboxClient'

export function start(options: { routes: JSX.Element[] }) {
    options.routes.push(<Route path="dynamic">
        <Route path="panel" getComponent={(loc, cb) => require(["./DynamicPanelPage"], (Comp) => cb(undefined, Comp.default))} />
    </Route>);


    OmniboxClient.registerSpecialAction({
        allowed: () => AuthClient.isPermissionAuthorized(DynamicPanelPermission.ViewDynamicPanel),
        key: "DynamicPanel",
        onClick: () => Promise.resolve(Navigator.currentHistory.createHref("~/dynamic/panel"))
    });
}

export namespace Options {
    export let onGetDynamicLine: ((ctx: StyleContext) => React.ReactNode)[] = [];
    export let onGetDynamicTab: (() => React.ReactElement<any>)[] = [];
}

export interface CompilationError {
    fileName: string;
    line: number;
    column: number;
    errorCode: string;
    errorMessage: string;
}

export namespace API {
    export function getCompilationErrors(): Promise<CompilationError[]> {
        return ajaxPost<CompilationError[]>({ url: `~/api/dynamic/compile` }, null);
    }

    export function restartApplication(): Promise<void> {
        return ajaxPost<void>({ url: `~/api/dynamic/restartApplication` }, null);
    }

    export function pingApplication(): Promise<void> {
        return ajaxPost<void>({ url: `~/api/dynamic/pingApplication` }, null);
    }
}

