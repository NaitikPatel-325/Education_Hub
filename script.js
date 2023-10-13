document.addEventListener("DOMContentLoaded", () => {
    const parentDiv = document.getElementById("project-items");

    fetch("https://naitikpatel-325.github.io/Education_Hub/projects.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const newElement = document.createElement('div');
                newElement.innerHTML = `<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 h-[400px] w-[600px]">
                
                <img src = "${project.imgUrl}" class="h-48 mb-4 block mx-auto"/>                 
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ${project.name}
                </h5>
                <button type="button" class="text-white my-6
                bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">

                    <a href="Projects/${project.url}">Load More..</a>
                    
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>

            </button>                
            </div>`

            parentDiv.appendChild(newElement);
            });
        })







})
