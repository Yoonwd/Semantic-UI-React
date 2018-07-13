import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const EventStackUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Name'
      description='An event name on which we will subscribe.'
      examplePath='addons/EventStack/Usage/EventStackExampleName'
    />
  </ExampleSection>
)

export default EventStackUsageExamples
