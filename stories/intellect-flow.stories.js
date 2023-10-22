import { html } from 'lit';
import '../src/intellect-flow.js';

export default {
  title: 'IntellectFlow',
  component: 'intellect-flow',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <intellect-flow
      style="--intellect-flow-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </intellect-flow>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
