import { css } from 'lit-element';

export const listboxComboboxStyle = css`
.annotate{
  font-style: italic;
  color: #366ED4;
}

.hidden {
  display: none;
}

.combobox-wrapper {
  display: inline-block;
  position: relative;
  font-size: 16px;
}

.combobox-label {
  font-size: 14px;
  font-weight: bold;
  margin-right: 5px;
}

.listbox, .grid {
  min-width: 230px;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 1.7em;
  z-index: 1;
}

.listbox .result {
  cursor: default;
  margin: 0;
}

.listbox .result:hover, .grid .result-row:hover {
  background: rgb(139, 189, 225);
}

.listbox .focused, .grid .focused {
  background: rgb(139, 189, 225);
}

.grid .focused-cell {
  outline-style: dotted;
  outline-color: green;
}

.combobox-wrapper input {
  font-size: inherit;
  border: 1px solid #aaa;
  border-radius: 2px;
  line-height: 1.5em;
  padding-right: 30px;
  width: 200px;
}

.combobox-dropdown {
  position: absolute;
  right: 0;
  top: 0;
  padding: 0 0 2px;
  height: 1.5em;
  border-radius: 0 2px 2px 0;
  border: 1px solid #aaa;
}

.grid .result-row {
  padding: 2px;
  cursor: default;
  margin: 0;
}

.grid .result-cell {
  display: inline-block;
  cursor: default;
  margin: 0;
  padding: 0 5px;
}

.grid .result-cell:last-child {
  float: right;
  font-size: 12px;
  font-weight: 200;
  color: #333;
  line-height: 24px;
}
`;
