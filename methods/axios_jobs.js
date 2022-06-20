//PLAN

//Objective: Find average estimated price of each contractor in the jobs array

// filter out all NON completed jobs.
// Use reduce method and get the average of all estimated price for each job
// Use recursion, call getJobs recursively on each data.nextRefUrl
//If nextref is null, that means there are no pages

const firstPage = "https://breezy-candidates.herokuapp.com/v1/companies/1/jobs";
pricePerPageArray = [];

const getJobs = (jobsUrl) => {
  axios
    .get(jobsUrl, {
      headers: {
        Authorization: "Bearer 0xBADDCAFE",
      },
    })
    .then((response) => {
      const jobs = response.data;
      const allJobs = jobs.data;

      const completedJobs = allJobs.filter(
        (job) => job.jobStatus === "completed"
      );

      const estimatedPriceSum = completedJobs.reduce(
        (a, b) => a + b.estimatedPriceUsdCents,
        0
      );
      const averagePrice = estimatedPriceSum / completedJobs.length;

      if (
        jobsUrl ===
        "https://breezy-candidates.herokuapp.com/v1/companies/1/jobs"
      ) {
        pricePerPageArray.push(averagePrice);
        getJobs(jobs.nextRefUrl);
      } else {
        pricePerPageArray.push(averagePrice);
        getJobs(jobs.nextRefUrl);
      }
      //Invoked on final nextRefURL page
      if (jobs.nextRefUrl === null) {
        pricePerPageArray.push(averagePrice);
        getAverage(pricePerPageArray);
        return;
      }
    })
    .catch((error) => console.error(error));
};

getJobs(firstPage);

const getAverage = (pricePerPageArray) => {
  const pricesSum = pricePerPageArray.reduce((a, b) => a + b, 0);
  const finalAvgPrice = pricesSum / pricePerPageArray.length;
  console.log("Koca: finalAvgPrice ", finalAvgPrice);
  return finalAvgPrice;
};
