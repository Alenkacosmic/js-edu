/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      let ability = config [focus];
      switch (knowsProgramming) {
        case true:
          return Math.ceil(800 / ability);
          break;
        case false:
          return Math.ceil(1300 / ability);
      }
  };
  