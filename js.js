var story_div = document.querySelector("#story_div");
var full_story = document.querySelector("#full_story");
var post_div = document.querySelector("#post_div");

var stories_data = [
  {
    dp: "https://images.unsplash.com/photo-1600357524338-0aa536556606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHMlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
    story:
      "https://plus.unsplash.com/premium_photo-1681234558325-16cc729b4ea8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    image:
      "https://images.unsplash.com/photo-1684758109016-4769e631d63a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    desc: "a woman standing on top of wooden frensh",
  },
  {
    dp: "https://images.unsplash.com/photo-1698380912776-fceab1b1994e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1613397998937-49d4aad1591b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    image:
      "https://images.unsplash.com/photo-1597843587021-d82e6028e718?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    desc: "woman in white and red polka",
  },
  {
    dp: "https://images.unsplash.com/photo-1679486342197-0734edf9f75c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    story:
      "https://images.unsplash.com/photo-1679486342197-0734edf9f75c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGdpcmxzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
    image:
      "https://images.unsplash.com/photo-1572380667363-6a333f21ea53?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "best friend forever",
  },
  {
    dp: "https://i.pinimg.com/736x/1e/58/40/1e5840009d0b19e60e5d001427a11006.jpg",
    story:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60",
    image:
      "https://images.unsplash.com/photo-1572380667363-6a333f21ea53?q=80&w=765&auto=format&fit=crop",
    desc: "best friend forever",
  },
  {
    dp: "https://images.unsplash.com/photo-1600357524338-0aa536556606?w=300&auto=format&fit=crop&q=60",
    story:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&auto=format&fit=crop&q=60",
    image:
      "https://images.unsplash.com/photo-1684758109016-4769e631d63a?w=600&auto=format&fit=crop&q=60",
    desc: "golden hour vibes ✨",
  },
  {
    dp: "https://images.unsplash.com/photo-1698380912776-fceab1b1994e?w=300&auto=format&fit=crop&q=60",
    story:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=600&auto=format&fit=crop&q=60",
    image:
      "https://images.unsplash.com/photo-1597843587021-d82e6028e718?w=600&auto=format&fit=crop&q=60",
    desc: "woman in white and red polka",
  },
  {
    dp: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&auto=format&fit=crop&q=60",
    story:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&auto=format&fit=crop&q=60",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60",
    desc: "city lights and cold nights 🌃",
  },
  {
    dp: "https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?w=300&auto=format&fit=crop&q=60",
    story:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
    desc: "just another day 🌿",
  },
];

// Stories render karo
stories_data.forEach(function(elem, indx){
    var story = `<div class="stories">
                    <img id="${indx}" src="${elem.dp}" alt="">
                </div>`;
    story_div.innerHTML += story;
});

story_div.addEventListener("click", function(e){
    var clickedStory = e.target.closest(".stories");
    if(!clickedStory) return;

    var id = clickedStory.querySelector("img").id;
    full_story.style.display = "block";
    full_story.style.backgroundImage = `url(${stories_data[id].story})`;

    setTimeout(function(){
        full_story.style.display = "none";
    }, 3000);
});

full_story.addEventListener("click", function(){
    full_story.style.display = "none";
});

// Posts render karo
stories_data.forEach(function(post){
    var post_data = `<div class="post">
                        <img src="${post.image}" alt="">
                        <div class="desc">
                            <p>${post.desc}</p>
                            <button class="like_btn">🤍 like</button>
                        </div>
                    </div>`;
    post_div.innerHTML += post_data;
});


post_div.addEventListener("click", function(e){
    if(e.target.classList.contains("like_btn")){
        e.target.classList.toggle("liked");
        e.target.textContent = e.target.classList.contains("liked") ? "❤️ You liked" : "🤍 like";
    }
});
