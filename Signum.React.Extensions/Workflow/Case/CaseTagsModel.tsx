﻿import * as React from 'react'
import { Dic } from '../../../../Framework/Signum.React/Scripts/Globals'
import { getMixin } from '../../../../Framework/Signum.React/Scripts/Signum.Entities'
import { ColorTypeaheadLine } from '../../Basics/Templates/ColorTypeahead'
import { CaseTagsModel, CaseTagEntity } from '../Signum.Entities.Workflow'
import {
    ValueLine, EntityLine, RenderEntity, EntityCombo, EntityList, EntityDetail, EntityStrip,
    EntityRepeater, EntityCheckboxList, EntityTabRepeater, TypeContext, EntityTable
} from '../../../../Framework/Signum.React/Scripts/Lines'
import { SearchControl, ValueSearchControl } from '../../../../Framework/Signum.React/Scripts/Search'
import Tag from './Tag'

export default class CaseTagsModelComponent extends React.Component<{ ctx: TypeContext<CaseTagsModel> }, void> {

    render() {
        var ctx = this.props.ctx;
        return (
            <EntityStrip ctx={ctx.subCtx(a => a.caseTags)}
                onItemHtmlProps={(tag: CaseTagEntity) => ({ style: { textDecoration: "none" } })}
                onRenderItem={(tag: CaseTagEntity) => <Tag tag={tag} />}
            />
        );
    }
}