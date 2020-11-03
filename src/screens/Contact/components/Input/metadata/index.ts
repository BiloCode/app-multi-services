import { KeyboardType } from "react-native";

namespace NSInput {
  export interface IPropsBase {
    label : string;
  }

  interface IPlaceholderInput {
    placeholder?: string;
  }

  interface IEventChangeTextInput {
    onChangeText?(ev : string) : void;
  }

  interface IProps extends IPropsBase , IPlaceholderInput {
    defaultValue? : string;
    type? : KeyboardType;
    maxLength? : number;
  }

  export interface IPropsText extends IProps,IEventChangeTextInput {}
  export interface IPropsTextArea extends IProps,IEventChangeTextInput {}

  export interface IPropsSelect extends IPropsBase {
    onChange?(item,index) : void;
    itemSelected : any;
  }
}

export default NSInput;