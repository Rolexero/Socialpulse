// import ComposeTweet from "./server-components/compose-tweet";

// import { getTweets } from "@/lib/supabase/queries";
// import Tweet from "./client-components/tweet";
// import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

const MainComponent = () => {
  //   const supabaseClient = createServerComponentSupabaseClient({
  //     cookies,
  //     headers,
  //   });

  //   const { data: userData, error: userError } =
  //     await supabaseClient.auth.getUser();

  //   const res = await getTweets({ currentUserID: userData.user?.id });

  return (
    <div className="flex w-[50%] ml-[300px] h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
      <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0 z-[9999]">
        Home
      </h1>
      <div className="border-t-[0.5px]   px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
        <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
        dkdkdk
        {/* <ComposeTweet /> */}
      </div>
      <div className="w-full h-full">
        Consequuntur corporis delectus quia illum ullam, pariatur, dicta
        necessitatibus, consequatur cupiditate qui magni eaque debitis quasi
        nisi consectetur? Cum totam cupiditate illum delectus enim unde
        recusandae nisi, voluptas molestias. Voluptates reiciendis nisi aliquam,
        sunt quos assumenda neque? Minima, accusantium? Quasi suscipit
        accusamus, reiciendis expedita eos quae veritatis excepturi. Ea commodi
        fugiat amet atque mollitia quos repudiandae deserunt illum ipsa
        repellendus obcaecati aut impedit assumenda saepe explicabo nulla
        aliquam minus doloremque, iste quis. Maxime quae cupiditate distinctio
        cumque nobis. Magni eligendi ab natus nulla excepturi animi corporis
        sint dignissimos a deleniti ipsa quasi fugit saepe numquam, eum nesciunt
        ipsam ipsum ut deserunt dolores distinctio! Veritatis ipsa perspiciatis
        sequi blanditiis. Animi, doloremque modi? A corporis reiciendis velit
        ducimus, animi numquam suscipit dolore minima placeat quo non ipsam
        quidem incidunt libero accusantium! Ipsam, debitis dignissimos?
        Recusandae illum provident ea quas error? Id magni dicta nihil corporis
        quas commodi distinctio quod! Minus maiores quis voluptate officiis quo
        rerum totam ipsa laudantium, consequuntur eos id sunt est? Quis officiis
        voluptatum amet obcaecati odio? Est officia nam sunt illum dolore velit
        temporibus ad fugiat ducimus sapiente vero, ipsa eum eos excepturi,
        nesciunt tempore aliquid magnam? Neque accusantium obcaecati ipsa
        quaerat. Perspiciatis minima voluptatibus commodi? Lorem ipsum, dolor
        {/* {res &&
          res.map(({ likes, tweet, profile, hasLiked, replies }) => {
            return (
              <Tweet
                key={tweet.id}
                tweet={{
                  tweetDetails: {
                    ...tweet,
                  },
                  userProfile: {
                    ...profile,
                  },
                }}
                likesCount={likes.length}
                currentUserId={userData.user?.id}
                hasLiked={hasLiked}
                repliesCount={replies.length}
              />
            );
          })} */}
      </div>
    </div>
  );
};

export default MainComponent;
