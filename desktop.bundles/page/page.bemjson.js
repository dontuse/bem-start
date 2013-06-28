({
    block: 'b-page',
    title: 'page',
    head: [
        { elem: 'css', url: '_page.css', ie: false},
        { elem: 'css', url: '_page', ie: true },
        { block: 'i-jquery', elem: 'core'},
        { elem: 'js', url:'_page.js'},
    ],
    content: [
        'block content'
    ]
})
