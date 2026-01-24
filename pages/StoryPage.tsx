import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, AlertTriangle } from 'lucide-react';

interface SensitiveContentProps {
  warning: string;
  children: React.ReactNode;
}

const SensitiveContent: React.FC<SensitiveContentProps> = ({ warning, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-8 border border-gray-200 dark:border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center gap-3 text-left bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
      >
        <AlertTriangle size={18} className="text-amber-500 dark:text-amber-400 flex-shrink-0" />
        <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">
          {warning}
        </span>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-5 py-5 bg-gray-50/50 dark:bg-white/[0.02] border-t border-gray-200 dark:border-white/10">
          <div className="space-y-4 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

const StoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-luxury-black pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">

          {/* Back Link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-luxury-jade dark:hover:text-luxury-gold transition-colors mb-16 group text-sm"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back
          </Link>

          {/* Essay Content */}
          <article className="prose-custom">

            <p className="text-gray-500 dark:text-gray-500 mb-12 text-sm">
              You clicked through, so here it is.
            </p>

            {/* Origins: 0-2 */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I was born in Helena, Montana to Michelle Johnson and Shane White. I'm a proud Assiniboine Sioux through Fort Belknap and a 5th generation Montana homesteader. I joke that I'm about as Montanan as it gets.
              </p>
            </div>

            <SensitiveContent warning="Content warning: domestic abuse, violence, attempted kidnapping. This isn't a happy beginning.">
              <p>
                My earliest years weren't safe. My father was deeply troubled—drugs, violence, unpredictability. People said he was an angel when sober and a devil when he wasn't.
              </p>
              <p>
                My first memory is watching him abuse my mom. Before I turned two, he attempted to kidnap and kill both of us. He went to prison. My mom packed what little we had and we left.
              </p>
            </SensitiveContent>

            {/* 2-4: Bouncing Around */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                From 2 to 4, we bounced around—Montana to the Dakotas to Iowa—my mom searching for a better life. We eventually landed in Indianapolis.
              </p>
            </div>

            {/* 4-7: Indianapolis */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Indianapolis from 4 to 7 holds some of my most vivid memories. My mom worked at a daycare so she could still spend time with me while making money. We lived with her boyfriend who grew weed in abandoned houses—another version of instability wearing a different face. We moved around to a couple different spots.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I have some of my most fun youthful memories from this time. One of my happiest childhood moments was going to the butterfly atrium at the Indianapolis Zoo with my mom when I was 5.
              </p>
            </div>

            <SensitiveContent warning="Content warning: childhood sexual abuse. This section describes deeply painful experiences.">
              <p>
                But those years also held things no child should experience.
              </p>
              <p>
                My babysitter and her family would tie me up with fuzzy handcuffs and molest me. Most of it was my babysitter herself—I think it was because she and her sister had been molested too, and it was what they knew.
              </p>
              <p>
                I also had a good friend from school. I'd go to his house, he'd come to mine. Sometimes when I went to his house, his parents would coach us and watch us. I kept this to myself until my mid-20s.
              </p>
              <p>
                I share it now to let others know: I am a Survivor. The son of a Survivor. You can Survive too. I dream that we can also all Thrive together.
              </p>
            </SensitiveContent>

            {/* 7-12: Northwest Ohio */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I was 7, my mom met Mark—a car hauler from northwest Ohio. We moved to his hometown and they eventually got married for a few years.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                This was probably the second happiest period of my childhood. I was collecting Pokemon cards, playing video games, building robots, building forts in snow drifts. We moved around a lot—apartments, trailers, country houses. Some moves were more abrupt than others. Some vehicles came and went faster than I understood. We got to travel around with Mark's job.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The beginning of the end was a family trip across the country. We were in Southern California when my mom and Mark decided their disagreements meant I couldn't be around. So at 11, I found my way to Calexico, navigated the bus stops to Palm Springs, took a train to Phoenix, and flew back to Ohio with a couple layovers. Alone.
              </p>
            </div>

            {/* 12-14: Tough Times */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                They divorced shortly after. Things got tough between my mom and me. It was reasonably complex, and neither of us were equipped to process it.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                We both went to therapy. I went to anger management and took Muay Thai and boxing classes. It helped me start to get a grip—and trust me, I'm still figuring out how to handle my emotions.
              </p>
            </div>

            <SensitiveContent warning="Content warning: overdose, emotional abuse. This describes the night that changed everything.">
              <p>
                One night we all had our limits tested. I was playing video games when my mom had some friends over—nothing major, just 4-5 people having a good time. Her and I weren't on the best footing, and they started getting rowdy.
              </p>
              <p>
                I got tired of it and started heading to my room. One of her friends made a snide comment. So I punched the fridge on my way to the bedroom. Broke my pinky and cut my hand open.
              </p>
              <p>
                They decided the best response was to sit me in a chair in the middle of the room and make fun of me for how stupid I was while my hand was dripping blood. About 15 minutes of this humiliation ritual before they let me go to bed.
              </p>
              <p>
                Early the next morning, one of her friends woke me up: "Sye, your mom isn't making any sense—she's talking about feeding a cat." We hadn't had a cat in years. Our Doberman treated them like stuffed animals.
              </p>
              <p>
                I went to check on her. She was laying in bed naked, covered in her own vomit, deliriously yelling. No one had called an ambulance. I grabbed the phone and carried her to the bathroom to clean her and make sure she didn't choke.
              </p>
              <p>
                While I was carrying her, she screamed at me that it was all my fault. All my fault we struggled. How much easier it would have been if I wasn't born.
              </p>
              <p>
                She had overdosed on Klonopin. It affected her memory and reason—she doesn't remember saying those things.
              </p>
              <p>
                At the end of the call, the ambulance asked how old I was. I told them 14. It wasn't long after that when CPS showed up and asked me to pack one bag of belongings. I was compliant. It was so painful for my momma.
              </p>
            </SensitiveContent>

            {/* 14-17: Foster Care */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I was very lucky to be placed with incredible foster parents—Sonda and Gary Metts. They are incredible people doing great things to bring positivity to the world.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                They challenged me, gave me structure and freedom, gave me confidence. With them I taught myself piano well enough to play a paid gig at an opera house, and to perform at the Sears Tower. Gary taught me golf—something I carry with me literally every single day.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Coming up on my 17th birthday, the state gave me a choice: age out of the system at 18, or move back with my mom at 17 and give her another chance. I don't think that choice should be up to the kid—at least not for me. I didn't know what was truly at stake. But I loved and missed my mom, and I wanted to believe that me being in foster care was a strong enough signal.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I moved back with her. She moved out within 3 months. I was on my own.
              </p>
            </div>

            {/* 17-20: College & Factory */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I did my senior year and barely graduated high school. Got into Bowling Green State University. Roomed with a lawyer's son from the city who had the room stocked with a mini fridge and beer.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                This was my opportunity for decision. I chose to stay roomies with him and live the party frat life. We both rushed the same fraternity, same as several of my friends. Neither of us attended class seriously.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I ended the year with a 0.7 GPA, didn't get into the frat, couldn't go back for a second year. He ended with a 0.0 GPA, did get into the frat, and continued college. That's when I started to see how the world really works.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I got a job at a precision drill bit manufacturing factory to pay off my debt. I was lucky to have mentor support there—the Ferguson brothers, Walt, and Chad. They really took care of me, wanted the best for me, and honestly turned a blind eye at how much of a shithead I was.
              </p>
            </div>

            {/* 20-26: Montana Return */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Working 40+ hours a week in a factory while my friends were getting degrees, getting engaged, getting fun jobs, traveling—it started to mess with me. I knew I couldn't be the guy who stays at the factory for 30 years even though it was easy work and easy money. Not to mention four roommates who used and abused me, leaving me stuck with rent and bills.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                The universe heard my call and sent my cousin. She told me I should come out to Montana and get to know my dad's side of the family. A chance to restart. Two weeks later, I was there.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I soft-landed in a garage with a bed in it. Showered at the gym. Made it work.
              </p>
            </div>

            <SensitiveContent warning="Content warning: violence, murder. This section describes my father's death.">
              <p>
                Unbeknownst to me, my dad was getting out of prison just a couple weeks after I moved there. A chance to get to know him—even though there was evidence his history was accurate.
              </p>
              <p>
                I realized things probably weren't going to be smooth sailing when I started waking up with him standing over my bed. He would say "You're quite the light sleeper, huh?" and then leave.
              </p>
              <p>
                About two weeks later, we got into a big argument. It started with him questioning a scar on my forearm, accusing me of using hard drugs. Then berating me for wanting to work in restaurants and use my brain and social skills to make money, instead of working the mines and vehicles like the other guys in the family.
              </p>
              <p>
                He grabbed me by my collar, looked at me with crazy hate, and balled up his fist like he was going to beat me. I stared at him silently until he let go and walked away.
              </p>
              <p>
                That was the last time I saw him.
              </p>
              <p>
                He was brutally murdered in 2019 outside of Canyon Ferry Lake. Two people he called friends—people he had living with him because they were down on their luck, spending time with the family—surprise attacked him on a mountainside after he offered to let them cut down wood on the family property for income.
              </p>
              <p>
                Stabbed over 80 times, front and back. His head was smashed with a boulder and left there. They lived in his trailer for two weeks after, helping the family look for him.
              </p>
              <p>
                Turns out he had testified against them in a child negligence case. He was trying to protect some kids.
              </p>
              <p>
                It is the most complex bundle of emotions I have ever been presented with. I'm still processing it.
              </p>
            </SensitiveContent>

            {/* 26-Now: Evolution */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                After that, I began thinking about how I could make an impact on the world. How I could directly bring positivity to as many people as possible.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I've gone through many evolutions of thought here. Realizing my initial motivation might have actually been greed. Or ego. I wanted to turn the family homestead into a resort development. But that's why it was so difficult to make progress—it was too self-serving. I make money and have cool property, family makes some money, and maybe a couple thousand people a year get to experience it. Pretty skewed.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                So I wondered how I could integrate myself into multiple luxury and resort properties around the world. Get to travel and enjoy the best, test the best, make sure people are enjoying it. But this serves the ego too. What, I just get to travel from luxury to luxury?
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                It's something I want anyone to be able to enjoy if they wish. To enjoy yourself in whatever way that means to you, and know that you aren't just padding someone else's pocket—you get to own a slice of the pie, and increase that slice if you wish. Democratizing sovereignty. This inspired LuxHavn: fractional ownership of luxury real estate and experiences.
              </p>
            </div>

            {/* Havn Architecture */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                But that isn't enough. Too many times have I seen people lose themselves in the pursuit.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                This became Havn's architecture: Health → Wealth → Impact → Luxury.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                If your health is not in order, you won't live long enough to worry about your wealth. If your wealth is not in order, it's difficult to make meaningful impact outside your inner circle—though all effort towards positive impact is appreciated. If you can master the causal balance between those three, then you should be able to enjoy the best of life as you see it.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                To some that's a countryside villa. To others it's a cruise. In the end, I want you to enjoy a life well lived.
              </p>
            </div>

            {/* The Pattern */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Here's the pattern that's defined my life:
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I studied wine, worked alongside Michelin-starred chefs, learned from master sommeliers until I could hold my own. Helped land a restaurant on Wine Spectator's international list in its first year. Became the guy people trusted with their wine programs.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Got my real estate license, found mentors, closed $5M in deals in 2025 — my Dimes so I can focus on my Dollars. Learned to read deals, structure transactions, see what others miss.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Spent 8-14 hours a day inside development environments until I could build anything I could imagine. 120 applications in 6 months on an app-a-day challenge.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The pattern is always the same: no credentials, no connections, no safety net. So I figure it out.
              </p>
            </div>

            {/* Why Sovereignty */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I build sovereignty—systems that give people clarity, control, and protection over what matters most.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Why sovereignty? Because I know what it feels like to have none.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                My mom did her best with what she had. She loved me unconditionally. She sacrificed her needs for my wants. She uprooted her life time and time again to try to find a stable footing for us. She worked multiple jobs. She taught me how to see the best in people. She taught me how to be kind to everyone you meet, because you never know what they are going through, and your kindness could be what nudges them in a better direction. I am lucky to have her support now, just as when I was younger. I was lucky to have her as the crazy mom screaming in the stands. I wouldn't have it any other way then, and I wouldn't have it any other way now.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I tell you this not for sympathy. I tell you because it explains everything I build.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                The kid who learned to read rooms to survive is the same person who now builds systems to help others thrive. The pattern recognition that kept me alive is the same thing that lets me see what a family office actually needs, what an operator is missing, what a problem actually requires.
              </p>
            </div>

            {/* Now */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm 32. I operate as a solo founder amplified by AI.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                And I'm building whatever needs building. It's no longer a matter of what I can build, but what I should build.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I don't know where the world is going to be — we are in such crazy times. What I do know is I am riding the wave, and I hope you join me. We are going to have a lot of fun :)
              </p>
            </div>

            {/* Closing */}
            <div className="pt-8 border-t border-gray-100 dark:border-white/5">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-10">
                If you read this far, I am sure we align in some ways. Reach out, let's connect. I want to hear your story.
              </p>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 text-luxury-jade dark:text-luxury-gold font-medium hover:gap-3 transition-all group"
              >
                Let's talk
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </article>

        </div>
      </div>
    </div>
  );
};

export default StoryPage;
