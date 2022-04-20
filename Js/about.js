const wrapper = document.querySelector(".team__card")

const members = [
    {
        image: "https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg             ",
        name: "Hi, i'm John",
        occupation: "Founder and CEO",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        image: "https://www.freecodecamp.org/news/content/images/size/w60/2022/02/adnan-min.jpeg",
        name: "Hi, i'm Milan",
        occupation: "Lead Developer",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        image: "https://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg",
        name: "Hi, i'm Smith",
        occupation: "Marketing Execurive",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    },
    {
        image: "https://l-ldesign.com.au/2016/wp-content/uploads/2020/01/profile-pic-katie-square.jpg",
        name: "Hi, i'm Natasha",
        occupation: "Senior Designer",
        discription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
            <div class="links">
                <i href="#" class="fa fa-facebook"></i>
                <i href="#" class="fa fa-twitter"></i>
                <i href="#" class="fa fa-google"></i>
                <i href="#" class="fa fa-instagram"></i>
            </div>            
        </div>
        `
    }
    wrapper.innerHTML = text;
});
