namespace NSInput {
  export interface IPropsBase {
    label : string;
  }

  interface IEventChangeTextInput {
    onChangeText?(ev : string) : void;
  }

  interface IProps extends IPropsBase {
    placeholder?: string;
    defaultValue? : string;
  }

  export interface IPropsText extends IProps,IEventChangeTextInput {}
  export interface IPropsTextArea extends IProps,IEventChangeTextInput {}

  export interface IPropsSelect extends IProps {
    onChange?() : void;
  }
}

export default NSInput;