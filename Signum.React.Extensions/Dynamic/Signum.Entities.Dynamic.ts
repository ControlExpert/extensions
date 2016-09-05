//////////////////////////////////
//Auto-generated. Do NOT modify!//
//////////////////////////////////

import { MessageKey, QueryKey, Type, EnumType, registerSymbol } from '../../../Framework/Signum.React/Scripts/Reflection'
import * as Entities from '../../../Framework/Signum.React/Scripts/Signum.Entities'
import * as Basics from '../../../Framework/Signum.React/Scripts/Signum.Entities.Basics'

interface IEvaluator {}
export const DynamicValidationEntity = new Type<DynamicValidationEntity>("DynamicValidation");
export interface DynamicValidationEntity extends Entities.Entity {
    Type: "DynamicValidation";
    name?: string | null;
    entityType?: Basics.TypeEntity | null;
    propertyRoute?: Basics.PropertyRouteEntity | null;
    isGlobalyEnabled?: boolean;
    eval: DynamicValidationEval;
}

export const DynamicValidationEval = new Type<DynamicValidationEval>("DynamicValidationEval");
export interface DynamicValidationEval extends EvalEntity<IEvaluator> {
    Type: "DynamicValidationEval";
}

export module DynamicValidationOperation {
    export const Save : Entities.ExecuteSymbol<DynamicValidationEntity> = registerSymbol({ Type: "Operation", key: "DynamicValidationOperation.Save" });
}

export const DynamicViewEntity = new Type<DynamicViewEntity>("DynamicView");
export interface DynamicViewEntity extends Entities.Entity {
    Type: "DynamicView";
    viewName?: string | null;
    entityType?: Basics.TypeEntity | null;
    viewContent?: string | null;
}

export module DynamicViewMessage {
    export const AddChild = new MessageKey("DynamicViewMessage", "AddChild");
    export const AddSibling = new MessageKey("DynamicViewMessage", "AddSibling");
    export const Remove = new MessageKey("DynamicViewMessage", "Remove");
    export const SelectATypeOfComponent = new MessageKey("DynamicViewMessage", "SelectATypeOfComponent");
}

export module DynamicViewOperation {
    export const Clone : Entities.ConstructSymbol_From<DynamicViewEntity, DynamicViewEntity> = registerSymbol({ Type: "Operation", key: "DynamicViewOperation.Clone" });
    export const Save : Entities.ExecuteSymbol<DynamicViewEntity> = registerSymbol({ Type: "Operation", key: "DynamicViewOperation.Save" });
    export const Delete : Entities.DeleteSymbol<DynamicViewEntity> = registerSymbol({ Type: "Operation", key: "DynamicViewOperation.Delete" });
}

export interface EvalEntity<T> extends Entities.EmbeddedEntity {
    script?: string | null;
}

