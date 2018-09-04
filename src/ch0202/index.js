// add the lodash library in es module style
import { groupBy } from "lodash-es"
import people from './people' // locally imported js module that has the data

const managerGroups = groupBy(people, "manager")

const root = document.createElement("div")

//let's process the data into string template and spit out the result
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
document.body.appendChild(root)
