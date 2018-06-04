﻿import * as React from 'react'
import { Lite, Entity } from '../../../Framework/Signum.React/Scripts/Signum.Entities'
import { getQueryKey, getQueryNiceName } from '../../../Framework/Signum.React/Scripts/Reflection'
import { OmniboxMessage } from '../Omnibox/Signum.Entities.Omnibox'
import { OmniboxResult, OmniboxMatch, OmniboxProvider } from '../Omnibox/OmniboxClient'
import { QueryToken, FilterOperation, FindOptions, FilterOption } from '../../../Framework/Signum.React/Scripts/FindOptions'
import * as Navigator from '../../../Framework/Signum.React/Scripts/Navigator'
import * as Finder from '../../../Framework/Signum.React/Scripts/Finder'
import { MapMessage } from './Signum.Entities.Map'



export default class MapOmniboxProvider extends OmniboxProvider<MapOmniboxResult>
{
    getProviderName() {
        return "MapOmniboxResult";
    }

    icon() {
        return this.coloredIcon("fa fa-map", "green");
    }

    renderItem(result: MapOmniboxResult): React.ReactChild[] {

        const array: React.ReactChild[] = [];

        array.push(this.icon());

        this.renderMatch(result.keywordMatch, array);
        array.push("\u0020");

        if (result.typeMatch != undefined)
            this.renderMatch(result.typeMatch, array);
        
        return array;
    }

    navigateTo(result: MapOmniboxResult) {

        if (result.keywordMatch == undefined)
            return undefined;

        return Promise.resolve("~/Map" + (result.typeName ? "/" + result.typeName : ""));
    }

    toString(result: MapOmniboxResult) {
        if (result.typeMatch == undefined)
            return result.keywordMatch.text;

        return "{0} {1}".formatWith(result.keywordMatch.text, result.typeMatch.text);
    }
}

interface MapOmniboxResult extends OmniboxResult {
    keywordMatch: OmniboxMatch;

    typeName: string;
    typeMatch: OmniboxMatch;
}
