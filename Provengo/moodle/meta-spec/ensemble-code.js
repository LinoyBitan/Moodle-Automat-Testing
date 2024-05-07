// @provengo summon ctrl

/**
 * List of events "of interest" that we want test suites to cover.
 */
const GOALS = [

    //Domain-specific
    Event("End(markCourseAsStar)"),
    Event("End(goToMyCourses)"),
    Event("End(deleteCourseAndContinue)"),


    //Two-Way
    // Event("Start(goToMyCourses)"),
    // Event("Start(fromDashboardToManageCourses)"),

];

/** This is the function for the TwoWay */

// function rankByMetGoals( ensemble ) {
//     let TestContainsTwoWay = 0;
//     const TwoWayCombinedGoals = [];
//     for (let idx = 0; idx < GOALS.length; idx++) {
//         for (let idx1 = 0; idx1 < GOALS.length; idx1++) {
//             if (idx !== idx1) {
//                 TwoWayCombinedGoals.push([GOALS[idx], GOALS[idx1]]);
//             }
//         }
//
//         for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
//             let test = ensemble[testIdx];
//             for (let eventIdx = 0; eventIdx < test.length - 1; eventIdx++) {
//                 let event1 = test[eventIdx];
//                 for (let eventIdx2 = eventIdx+1; eventIdx2 < test.length; eventIdx2++) {
//                     let event2 = test[eventIdx2];
//                     for (let ugIdx = 0; ugIdx < TwoWayCombinedGoals.length; ugIdx++) {
//                         let unreachedGoal = TwoWayCombinedGoals[ugIdx];
//                         let goal1 = unreachedGoal[0];
//                         let goal2 = unreachedGoal[1];
//                         // Check if the combination of two goals contains the tuple of events
//                         if (goal1.contains(event1) && goal2.contains(event2)) {
//                             TestContainsTwoWay += 1;
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//         return GOALS.length-TestContainsTwoWay;
//
//     }
// }

const makeGoals = function(){
}

/**
 * Ranks test suites by how many events from the GOALS array were met.
 * The more goals are met, the higher the score.
 *
 * It make no difference if a goal was met more then once.
 *
 * @param {Event[][]} ensemble The test suite to be ranked.
 * @returns Number of events from GOALS that have been met.
 */
function rankByMetGoals( ensemble ) {
    const unreachedGoals = [];
    for ( let idx=0; idx<GOALS.length; idx++ ) {
        unreachedGoals.push(GOALS[idx]);
    }

    for (let testIdx = 0; testIdx < ensemble.length; testIdx++) {
        let test = ensemble[testIdx];
        for (let eventIdx = 0; eventIdx < test.length; eventIdx++) {
            let event = test[eventIdx];
            for (let ugIdx=unreachedGoals.length-1; ugIdx >=0; ugIdx--) {
                let unreachedGoal = unreachedGoals[ugIdx];
                if ( unreachedGoal.contains(event) ) {
                    unreachedGoals.splice(ugIdx,1);
                }
            }
        }
    }

    return GOALS.length-unreachedGoals.length;
}

/**
 * Ranks potential test suites based on the percentage of goals they cover.
 * Goal events are defined in the GOALS array above. An ensemble with rank
 * 100 covers all the goal events.
 *
 * Multiple ranking functions are supported - to change ranking function,
 * use the `ensemble.ranking-function` configuration key, or the
 * --ranking-function <functionName> command-line parameter.
 *
 * @param {Event[][]} ensemble the test suite/ensemble to be ranked
 * @returns the percentage of goals covered by `ensemble`.
 */
 function rankingFunction(ensemble) {

    // How many goals did `ensemble` hit?
    const metGoalsCount = rankByMetGoals(ensemble);
    // What percentage of the goals did `ensemble` cover?
    const metGoalsPercent = metGoalsCount/GOALS.length;

    return metGoalsPercent * 100; // convert to human-readable percentage
}


