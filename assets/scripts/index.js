$(document).ready(function () {

    console.log('Document Ready')


    const AddUserRow = function (id, name) {
        let row = `<tr class='user' id='userrow${id}'><th scope='row' id=user${id}>${id}</th><td>${name}</td></tr>`;
        $('.users').append(row);
        $(`#user${id}`).click(function() { 
            console.log(`click ${id}`)
            $(`#posts${id}`).css('display', 'block')
         })
    };

    const AddPostsTable = function (userid) {

        fetch(`https://jsonplaceholder.typicode.com/users/${userid}/posts`)
            .then(response => posts = response.json())
            .then(json => {
                let postsTable =

                    `<table class='posts' id='posts${userid}'>
                        <thead>
                            <tr>
                                <th scope="col">Post Id</th>
                                <th scope="col">Post Body</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>`

                $(`#userrow${userid}`).append(postsTable),
                    json.forEach(element => {
                        $(`#posts${userid}`).append(`<tr><th scope='row'>${element.id}</th><td>${element.body}</td></tr>`)
                    })
            })
    }

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => json.forEach(element => {
            console.log(element.id + element.name)
            AddUserRow(element.id, element.name)
            AddPostsTable(element.id)
        }))
});


