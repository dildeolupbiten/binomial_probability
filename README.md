# binomial_probability

## Preface

Ali Nesin, a mathematics professor, once asked an interesting question in a public video:
"How can we determine whether a die is biased in a dice-rolling experiment? In other words, after how many trials can we confidently assert that the die is unfair?"

Public video of Ali Nesin: https://www.youtube.com/watch?v=WAL0HA8TYSI&t=280s

This web application was developed to answer Professor Ali Nesin's question. However, before delving into the answer, let's examine the importance of what the professor emphasized about "asserting something".

As a mathematician, Ali Nesin is well aware that the probability of a dice being biased is calculable. However, his question is not about whether such a case could be determinable, but rather when we can confidently conclude that a dice is fraudulent based on non-experimental data.

For instance, he asks: If we roll a dice 100 times and observe 70 heads and 30 tails, how do we determine whether this outcome is purely coincidental or if the dice is indeed ufair?

The response of a mathematician like Ali Nesin to the question above would likely be:
"Keep rolling the dice and recording the results. Compare the frequency of outcomes from 100 trials to those from 10000 trials to see if the pattern persists."

For a mathematician like Ali Nesin, making an assertion is just as important as determining the margin of error, as well as the probability and frequency of the claimed event.

This leads us to a deeper philosophical question:
"What is the probability of a specific event occurring within a given time range?"

## Usage

This web application can be used in two different ways:

1. You can call the web application using url queries with some specific parameters like the following:

https://dildeolupbiten.github.io/binomial_probability/?xcase=65&ncase=100&xcontrol=50&ncontrol=100&alpha=0.01

https://dildeolupbiten.github.io/binomial_probability/?xcase=65&ncase=100&xcontrol=50&ncontrol=100

The available url parameters are:

- xcase
- ncase
- xcontrol
- ncontrol
- alpha

Alpha is the significance level that is used to show at which number of the trials the occurence of a specific outcome is statistically significant.

2. You can open the web page and enter the values to the related input fields.

Notice that whether an outcome is statistically significant depends on the significance level we arbitrarily set. If we set our significance level to 0.01, it means that assuming the null hypothesis is true, we have a 1% chance of incorrectly rejecting it. In other words, in repeated experiments where the null hypothesis holds, we would expect to observe a statistically significant result due to random chance in about 1 out of 100 trials. Similarly, with a significance level of 0.001, this false positive rate would occur approximately once in every 1,000 trials.

For example, under α = 0.01, an outcome of 65 successes out of 100 trials may be statistically significant. This means that, assuming H₀ is true, the probability of obtaining such an extreme result purely by chance is below 1%, allowing us to reject the null hypothesis at this significance level.

![Image](https://github.com/user-attachments/assets/f20ae07e-d0de-4c09-8963-ba2df58758c5)

Under α = 0.001, a result of 65 out of 100 may no longer be statistically significant, meaning that the probability of observing such an extreme result due to random chance alone is higher than the threshold set by α = 0.001.

![Image](https://github.com/user-attachments/assets/ea4ffc1a-bc00-4dcb-bd11-801b55c9de0d)
