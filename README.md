# frontend-mentor-password-generator

What i learnt: it was a great opportunity to try and apply what i have learnt from udemy!

1. working with input range and how to customise their styling:
   https://dev.to/christo_pr/create-a-nice-looking-input-range-with-only-css-4oa2

2. every sibling item needs a key prop to help react identify what items changed
3. for useEffect, only variables outside of the useEffect scope & within the component function need to be added as a dependency
4. inputs should always have a corresponding label in order to improve accessibility.

What i think can be improved (currently attempting to do them in refactor branch):

1. i am not very happy with the way i am handling the password regeneration when the button is clicked.

- so right now generateButton is working even though i am not passing anything into setReset. My guess is that
  even if i do not pass anything into setReset, the isReset state is somehow updated, causing the useEffect to run.
  is there any way i could perhaps refactor this?

2. is there a better way to manage those useEffects?
