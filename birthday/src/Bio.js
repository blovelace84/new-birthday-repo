import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Bio.css';

const Bio = ({name, imageUrl}) => {

  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    setShowMore(!showMore);
  }

  const handleNavigate = () => {
    navigate('/'); //change the path to the homepage
  };

  return (
    <div className="bio-container">
      {imageUrl && <img src={imageUrl} alt={`${name}'s profile`} className="bio-image"></img>}
      <h2 className="bio-name">{name}</h2>
      

      <button className="bio-button" onClick={handleToggle}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>
      <button className="bio-button" onClick={handleNavigate}>
        Go to Homepage
      </button>
      {showMore && (
        <p className="bio-extra">January 1, 1945 at 12:20 am in the basement of Dunn Hospital on Ellis Avenue, Naomi Delores Spece arrived in this world.  
        The daughter of the late Luther Franklin Spence and Katie Naomi Freeman Spence, “Teenie Bow” was most likely the first child born in the new year.  
        But, it was 1945 and Jim Crow ruled the South.  
        Born into segregation, she would come of age during the height of the Civil Rights Movement in the 1960s.
        Her early childhood home no longer exists.  Located near Triangle Waffle and the Shell gas station on what is now East Cumberland Street, she grew up in a neighborhood filled with love and childhood mischief.  At that time, Hwy 421 or East Cumberland Street did not go in that direction.  Rather, her home was located on a street that was used for a truck turn-around.  And beyond that were trees – many, many trees.  That all changed in the 1950s when they started building I-95.  
        Her father helped build I-95.  And she remembers her older brother, “Sonny,” riding his bicycle down the hill.  Probably along with her cousin Pete (Dr. Pete Brewington) and “Red,” (N. Carnell Robinson), who also lived on the street.  Teenie Bow never rode down the hill, though.  Also in the small neighborhood was her childhood and lifelong friends, Charles Smith, who lived with Pastor Connie Smith and “Lil Bit.”  Often, her cousin Bicie would join in the mischief and they were played often under the watchful eye of her cousin Mozelle.  
        Her maternal grandmother Katie Brewington died when she was an infant.  But, her grandfather, Henry Connie Freeman, lived with them for several years during his final years.  Her paternal grandmother, Flora Spence, lived across the truck lane.  She never new her older sister, Cecilia, who died shortly after birth.  So she was the only girl of four children—Luther was the oldest.  Followed by Naomi, then Connie and Larry.  She grew up surrounded by love.
        Where did the nickname “Teenie Bow” come from?  She wore bows in her hair as a little girl.  But for the first four years of her life, she didn’t have much hair.  Her older cousin would twist her hair as a little girl because there was not enough hair to plait.  But, now she is known for her beautiful thick hair.  She loved tea sets as a little girl.  And spent many nights at her Aunt Kathleen’s home.  In the early years, the family was a member of [need to get the church name].  And throughout her childhood, the church would take them to Atlantic Beach in the summers.  And to the pool at Chavis Heights in Raleigh.  It was at the pool where she almost drowned at the age of 16.  From that point on she never got in a pool.  And never learned to swim.
        She was educated at Harnett County Training School, the black school, with grades K-12.  As said, she was a mischievous child who would “plan” her fights with her childhood friend, [got to get name].  But her mother put a stop to it when she was 11.  Too old to be fighting.  During her teenage years, the family changed churches to Dunn Chapel Free Will Baptist Church.  It was at Dunn Chapel where she participated in many, many pageants and won several of them.  In high school, she acted in many plays and was the President of the Future Homemakers Association.  She became state president of the organization and traveled to Hot Springs, Arkansas by train for the national convention.  She attended her high school prom with her cousin Pete as her date.  That was the only way her mother would allow her to attend.  (Even though the parents also attended prom back then too).  
        During high school, she also began traveling to New York with her older brother to work during the summer.  She would stay with her Uncle Ernest.  Her brother stayed with her Uncle Sam.  She spent several summers with her Uncles Ernest, Sam and Eugene and their families including her older cousin Gladys and her cousin Cynthia who was closer to her age.  She worked as a short order cook  and once burned herself with cooking oil.  
        Upon graduating from Harnett High School in 1962, she was accepted to Bennet College.  But chose to attend Barber-Scotia College in Concord.  Why?  Because at Bennet she would have to stay with family.  But at Barber-Scotia, she could stay in the dorm.  She started out as a home economics major but switched to biology and studied education.  She would awake early in the morning to study.  And would play Spades at night.  She attended dances at the college, and since it was an all-girls school at the time, young men would come over from Livingstone College and Johnson C. Smith in Charlotte.  Her college buddies were Cordia Wallace, [get other names].  
        Naomi graduated from Barber-Scotia in 1966.  She did her student teaching in Carthage, N.C. And, near the end of her senior year of college, she was offered a teaching position in Harnett County.  This was the height of the Civil Rights Movement and the Harnett County School System was in the midst of complying with the Brown v. Board of Education court decision.  Harnett County chose eleven black teachers to integrate eleven high schools.  Naomi was assigned to Lafayette High School in Chalybeate Springs about halfway between Lillington and Fuquay.  
        </p>
        
      )}
      
    </div>
  );
};

export default Bio;