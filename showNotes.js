let desc = document.getElementsByClassName("py-3 px-1 p-md-3 col-12 col-md background-gray")[0]

let notes = `<p>Note goes here</p>`

desc.innerHTML = desc.innerHTML + notes

console.log("Finished loading notes")