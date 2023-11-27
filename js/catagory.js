const loadSpecificCatagory = async (catagoryId) => {
  // console.log(catagoryId);
  const tabActive = document.getElementById(catagoryId);
  const tabActive1000 = document.getElementById("1000");
  const tabActive1001 = document.getElementById("1001");
  const tabActive1003 = document.getElementById("1003");
  const tabActive1005 = document.getElementById("1005");
  if (catagoryId === "1000") {
    tabActive.classList.add("tab-active");
    tabActive1001.classList.remove("tab-active");
    tabActive1003.classList.remove("tab-active");
    tabActive1005.classList.remove("tab-active");
  } else if (catagoryId === "1001") {
    tabActive.classList.add("tab-active");
    tabActive1000.classList.remove("tab-active");
    tabActive1003.classList.remove("tab-active");
    tabActive1005.classList.remove("tab-active");
  } else if (catagoryId === "1003") {
    tabActive.classList.add("tab-active");
    tabActive1000.classList.remove("tab-active");
    tabActive1001.classList.remove("tab-active");
    tabActive1005.classList.remove("tab-active");
  } else {
    tabActive.classList.add("tab-active");
    tabActive1000.classList.remove("tab-active");
    tabActive1001.classList.remove("tab-active");
    tabActive1003.classList.remove("tab-active");
  }
  loadingSpinner(true);
  const CardContainer = document.getElementById("card-container");
  // When click cardContainer will be empty for clicked catagory
  CardContainer.innerHTML = "";
  console.log(catagoryId);

  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${catagoryId}`
  );
  const data = await res.json();
  const dataArry = data.data;

  // // sort By view condition
  // dataArry.forEach((singleCatagory) => {
  //   let viewsCount = singleCatagory?.others?.views;
  //   // console.log(viewsI);
  //   const newViews = parseFloat(viewsCount);
  //   singleCatagory.others.views = newViews;
  // });
  // let newSort = dataArry.sort((a, b) => {
  //   if (a.others.views < b.others.views) {
  //     return 1;
  //   }
  //   if (a.others.views > b.others.views) {
  //     return -1;
  //   }
  //   return 0;
  // });

  // console.log(dataArry);
  const emptyArr = [];
  if (dataArry.length === emptyArr.length) {
    loadingSpinner(false);
    // console.log("No Data");
    const noDataFoundDiv = document.createElement("div");
    noDataFoundDiv.classList = `flex flex-col justify-center items-center`;
    noDataFoundDiv.innerHTML = `
     <img class="w-[140px] mb-4" src="./images/Icon.png" alt="" />
     <h3 class="text-xl md:text-3xl font-bold text-center">Oops!! Sorry, There is no content here</h3>
  
    `;
    CardContainer.classList = "";
    CardContainer.appendChild(noDataFoundDiv);
  } else {
    CardContainer.classList = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-items-center`;
    handleCatagoryEvent(dataArry);
  }
};

const handleCatagoryEvent = (dataArry) => {
  // console.log(dataArry);

  dataArry.forEach((element) => {
    // console.log(element);
    cardElement(element);
  });
  loadingSpinner(false);
};

//Loading Spinner
const loadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading-spinner");
  // console.log(loadingSpinner);
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};
