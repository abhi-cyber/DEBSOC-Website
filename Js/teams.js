const wrapper = document.querySelector(".team__card")

const members = [
    {
        image: "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
        name: "Hi, i'm John",
        occupation: "Founder and CEO",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        image: "https://www.freecodecamp.org/news/content/images/size/w60/2022/02/adnan-min.jpeg",
        name: "Hi, i'm Milan",
        occupation: "Lead Developer",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        image: "",
        name: "Hi, i'm Smith",
        occupation: "Marketing Execurive",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        image: "",
        name: "Hi, i'm Natasha",
        occupation: "Senior Designer",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
]

document.addEventListener('DOMContentLoaded', () =>{
    let text = ''
    for(let i = 0; i < members.length ; i++){
        text += `
        <div class="card">
            <div class="photo">
                <img src = "${members[i].image}">
            </div>
            <div class="title">${members[i].name}</div>
            <div class="occu">${members[i].occupation}</div>
            <div class="desc">${members[i].discription}</div>
            
        </div>
        `
    }
    wrapper.innerHTML = text;
});
