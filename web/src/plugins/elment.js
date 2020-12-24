import {
  Button,
  Select,
  Drawer,
  Table,
  TableColumn,
  Input,
  InputNumber,
  Checkbox,
  CheckboxButton,
  Upload,
  DatePicker,
  Option,
  RadioGroup,
  RadioButton,

  Autocomplete,
} from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Button);
    Vue.use(Select);
    Vue.use(Drawer);
    Vue.use(Table);
    Vue.use(TableColumn);
    Vue.use(Input);
    Vue.use(InputNumber);
    Vue.use(Checkbox);
    Vue.use(CheckboxButton);
	Vue.use(Upload);
	Vue.use(DatePicker);

	Vue.use(Autocomplete);
	Vue.use(Option);
	Vue.use(RadioGroup)

	Vue.use(RadioButton)

   
  },
};
export default element;
