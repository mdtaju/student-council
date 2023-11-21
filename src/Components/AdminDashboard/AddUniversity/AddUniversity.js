import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useAddUniversityMutation } from "../../../features/university/universityApi";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import AddCourse from "./AddCourse/AddCourse";
import ApplicationRequirement from "./ApplicationRequirement/ApplicationRequirement";
import Features from "./Features/Features";
import InstituteDetails from "./InstituteDetails/InstituteDetails";

const AddUniversity = () => {
  const [addUniversity] = useAddUniversityMutation();
  const [aboutOfIns, setAboutOfIns] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    error: false,
    message: "",
  });

  // institute details - under the university
  const [instituteName, setInstituteName] = useState("");
  const [countryOfInstitute, setCountryOfInstitute] = useState("");
  const [cityOfInstitute, setCityOfInstitute] = useState("");
  const [addressOfInstitute, setAddressOfInstitute] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [instituteId, setInstituteId] = useState("");
  const [providerId, setProviderId] = useState("");
  const [typeOfInstitute, setTypeOfInstitute] = useState("");
  const [constOfLiving, setCostOfLiving] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [qsRanging, setQsRanking] = useState("");
  const [nationalRanking, setNationalRanking] = useState("");
  const [worldRanking, setWorldRanking] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [institutePartnership, setInstitutePartnership] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [instituteLogo, setInstituteLogo] = useState([]);
  const [instituteImages, setInstituteImages] = useState([]);
  const [instituteDocuments, setInstituteDocuments] = useState([]);
  const [aboutDocuments, setAboutDocuments] = useState("");
  const [aboutInstitute, setAboutInstitute] = useState("");
  const [commission, setCommission] = useState("");
  const [mapLocation, setMapLocation] = useState("");

  // requirements state - under the university
  const [requirements, setRequirements] = useState([]);

  // programs state - under the university
  const [programs, setPrograms] = useState([]);

  // features - under the university
  const [features, setFeatures] = useState([]);

  // add courses - under the courses
  const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   if (!isError && data) {
  //     setOpen(true);
  //     setMessage({
  //       error: false,
  //       message: "University Successfully Added.",
  //     });
  //   }
  //   if (isError && !data) {
  //     setOpen(true);
  //     setMessage({
  //       error: true,
  //       message: "Something went wrong. University Not Added.",
  //     });
  //   }
  //   console.log("hello world");
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, [isError, data]);

  const handleSubmit = async () => {
    const formData = new FormData();
    setLoading(true);

    if (
      instituteLogo?.length === 0 &&
      instituteImages?.length === 0 &&
      instituteDocuments?.length === 0
    ) {
      alert("Please, upload minimum one file like Logo, Image or Documents.");
      return;
    }

    for (let i = 0; i < instituteLogo.length; ) {
      const element = instituteLogo[i];
      formData.append("logo", element);
      i++;
    }

    for (let i = 0; i < instituteImages.length; ) {
      const image = instituteImages[i];
      formData.append("images", image);
      i++;
    }

    for (let i = 0; i < instituteDocuments.length; ) {
      const doc = instituteDocuments[i];
      formData.append("documents", doc);
      i++;
    }

    // course documents
    for (let i = 0; i < courses.length; ) {
      const course = courses[i];
      const { require_documents } = course;
      if (require_documents.length > 0) {
        for (let j = 0; j < require_documents.length; ) {
          const file = require_documents[j];
          formData.append(`courseDocuments`, file);
          j++;
        }
      }
      i++;
    }

    // all courses
    formData.append("courses", JSON.stringify(courses));
    // features
    formData.append("features", JSON.stringify(features));
    // programs
    formData.append("programs", JSON.stringify(programs));
    // requirement
    formData.append("requirements", JSON.stringify(requirements));
    // institute details
    formData.append("institute_name", instituteName);
    formData.append("country_of_institute", countryOfInstitute);
    formData.append("city_of_institute", cityOfInstitute);
    formData.append("address_of_institute", addressOfInstitute);
    formData.append("founded_year", foundedYear);
    formData.append("institute_id", instituteId);
    formData.append("provider_id", providerId);
    formData.append("type_of_institute", typeOfInstitute);
    formData.append("cost_of_living", constOfLiving);
    formData.append("website_url", websiteUrl);
    formData.append("qs_ranking", qsRanging);
    formData.append("national_ranking", nationalRanking);
    formData.append("world_ranking", worldRanking);
    formData.append("youtube_link", youtubeLink);
    formData.append("institute_partnership", institutePartnership);
    formData.append("delivery_method", deliveryMethod);
    formData.append("about_documents", aboutDocuments);
    formData.append("about_institute", aboutInstitute);
    formData.append("commission", commission);
    const getLocation = mapLocation.split(",");
    if (getLocation?.length === 2) {
      formData.append("latitude", getLocation[0]);
      formData.append("longitude", getLocation[1]?.trimStart());
    }

    await addUniversity(formData)
      .unwrap()
      .then((d) => {
        setOpen(true);
        setMessage({
          error: false,
          message: "University Successfully Added.",
        });
        // clear starts
        setInstituteName("");
        setCountryOfInstitute("");
        setCityOfInstitute("");
        setAddressOfInstitute("");
        setFoundedYear("");
        setInstituteId("");
        setProviderId("");
        setTypeOfInstitute("");
        setCostOfLiving("");
        setWebsiteUrl("");
        setQsRanking("");
        setNationalRanking("");
        setWorldRanking("");
        setYoutubeLink("");
        setInstitutePartnership("");
        setDeliveryMethod("");
        setInstituteLogo([]);
        setInstituteImages([]);
        setInstituteDocuments([]);
        setAboutDocuments("");
        setAboutInstitute("");
        setRequirements([]);
        setPrograms([]);
        setFeatures([]);
        setCourses([]);
        setMapLocation("");
        setCommission("");
      })
      .catch((e) => {
        setOpen(true);
        setMessage({
          error: true,
          message: "Something went wrong. University Not Added.",
        });
      });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[300px] sm:w-[600px] md:w-[960px]">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          Add University
        </h1>
        {/* institute details */}
        <InstituteDetails
          aboutOfIns={aboutOfIns}
          setAboutOfIns={setAboutOfIns}
          instituteName={instituteName}
          setInstituteName={setInstituteName}
          countryOfInstitute={countryOfInstitute}
          setCountryOfInstitute={setCountryOfInstitute}
          cityOfInstitute={cityOfInstitute}
          setCityOfInstitute={setCityOfInstitute}
          addressOfInstitute={addressOfInstitute}
          setAddressOfInstitute={setAddressOfInstitute}
          foundedYear={foundedYear}
          setFoundedYear={setFoundedYear}
          instituteId={instituteId}
          setInstituteId={setInstituteId}
          providerId={providerId}
          setProviderId={setProviderId}
          typeOfInstitute={typeOfInstitute}
          setTypeOfInstitute={setTypeOfInstitute}
          constOfLiving={constOfLiving}
          setCostOfLiving={setCostOfLiving}
          websiteUrl={websiteUrl}
          setWebsiteUrl={setWebsiteUrl}
          qsRanging={qsRanging}
          setQsRanking={setQsRanking}
          nationalRanking={nationalRanking}
          setNationalRanking={setNationalRanking}
          worldRanking={worldRanking}
          setWorldRanking={setWorldRanking}
          youtubeLink={youtubeLink}
          setYoutubeLink={setYoutubeLink}
          institutePartnership={institutePartnership}
          setInstitutePartnership={setInstitutePartnership}
          deliveryMethod={deliveryMethod}
          setDeliveryMethod={setDeliveryMethod}
          instituteLogo={instituteLogo}
          setInstituteLogo={setInstituteLogo}
          instituteImages={instituteImages}
          setInstituteImages={setInstituteImages}
          instituteDocuments={instituteDocuments}
          setInstituteDocuments={setInstituteDocuments}
          aboutDocuments={aboutDocuments}
          setAboutDocuments={setAboutDocuments}
          aboutInstitute={aboutInstitute}
          setAboutInstitute={setAboutInstitute}
          commission={commission}
          setCommission={setCommission}
          mapLocation={mapLocation}
          setMapLocation={setMapLocation}
        />

        {/* add courses */}
        <AddCourse courses={courses} setCourses={setCourses} />

        {/* const and duration */}
        {/* <CostAndDuration
          programLevels={programLevels}
          setProgramLevels={setProgramLevels}
        /> */}

        {/* features */}
        <Features features={features} setFeatures={setFeatures} />

        {/* programs */}
        {/* <Programs programs={programs} setPrograms={setPrograms} /> */}

        {/* application requirement */}
        <ApplicationRequirement
          requirements={requirements}
          setRequirements={setRequirements}
        />

        <button
          disabled={loading}
          onClick={() => handleSubmit()}
          className={`w-full px-4 py-2 ${
            loading
              ? "bg-gray-200 hover:bg-gray-300"
              : "bg-blue-500 hover:bg-blue-600"
          } active:scale-95 duration-200 text-white font-medium rounded-md mt-6`}>
          {loading ? <CircularProgress /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default AddUniversity;
