const Hero = ({heroName}) => {
    if(heroName === "SuperMan")
    {
        throw new Error("Not My Hero!")
    }
    return ( 
        <div>
            <h4>
                My hero is {heroName}
            </h4>
        </div>
     );
}
 
export default Hero;