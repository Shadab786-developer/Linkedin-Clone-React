/*
This file manages posts that appear on the home feed.
It's like managing the main news feed of the app.

Key features:
1. Has a default post when no posts exist
2. Can add new posts (they appear at the top)
3. Can remove posts
4. Saves all changes to localStorage

The initial state includes a sample post with:
- Unique ID (using crypto.randomUUID())
- User information
- Post content (text, image, video)
- Social metrics (likes, comments, reposts)

The unshift() method is used to add new posts at the beginning,
just like real social media feeds show newest content first.
*/

import { createSlice } from "@reduxjs/toolkit";

const loadPostFromHome = () => {
  try {
    const savePost = localStorage.getItem("homePost");
    return savePost
      ? JSON.parse(savePost)
      : [
          {
            id: crypto.randomUUID(),
            post_user_name: "",
            post_user_image: `https://media.licdn.com/dms/image/v2/D5603AQGp2mSnfAnhzQ/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1709686748355?e=1746057600&v=beta&t=mse-N99OGNiw7OpXKazm0vsEKjxongZDLK0jRjN2bZc`,
            post_user_description: `Senior Community Manager at n8n`,
            post_time: `15h`,
            post_theory: `Have a conversation with your study books? Why not!

My daughter was studying for a physics test this weekend, an I wondered if I could build her an AI teacher. Turns out is was surprisingly easy and took me less than an hour!

Here's what I built in n8n:

1. The first workflow takes photographs of pages from her book and passes it through OpenAI for OCR. It stores the results in AirTable for cost reasons - I really only need to do the OCR once.
2. The second workflow inserts the page texts into a vector store.
3. The final workflow is an agent that is instructed to quizz her about the provided theory. If she gets a question wrong, it needs to provide her the required information and then re-test her.

The results so far are pretty good, but not perfect. it still has a tendency to ask questions that are not covered in the provided chapters, but otherwise the interaction is really quite good. I'll post a screenshot and translation in a comment below too.

Next up I'll try some other classes like cultural history or geography and see how it performs there. I might even pick up a thing or two from those books in the process!

What do you think?

hashtag#n8n hashtag#ai hashtag#llm`,
            post_image: `https://media.licdn.com/dms/image/v2/D4E22AQGtF8cBxHmRsw/feedshare-shrink_800/B4EZTqKlyxGYAk-/0/1739095433606?e=1741824000&v=beta&t=XpVn139rs800SNRH6znpEicT_5dvHOTOXg4UEhN81oo`,
            post_video: ``,
            post_likes: 160,
            post_comment: 21,
            post_reposots: 3,
          },
        ];
  } catch {
    return [];
  }
};

const initialState = {
  homePost: loadPostFromHome(),
};

export const HomePostSlice = createSlice({
  name: "homePost",
  initialState,
  reducers: {
    addPostToHome: (state, action) => {
      state.homePost.unshift(action.payload);
      localStorage.setItem("homePost", JSON.stringify(state.homePost));
    },

    removePostToHome: (state, action) => {
      state.homePost = state.homePost.filter(
        (post) => post.id !== action.payload.id
      );
      localStorage.setItem("homePost", JSON.stringify(state.homePost));
    },
  },
});

export const { addPostToHome, removePostToHome } = HomePostSlice.actions;

export default HomePostSlice.reducer;
