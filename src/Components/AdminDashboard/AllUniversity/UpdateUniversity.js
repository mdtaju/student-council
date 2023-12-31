import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddCoursesToServerMutation,
  useDeleteCoursesMutation,
} from "../../../features/course/courseApi";
import {
  useGetSingleUniversityQuery,
  useUpdateUniversityAppReqMutation,
  useUpdateUniversityFeaturesMutation,
  useUpdateUniversityMutation,
} from "../../../features/university/universityApi";
import SnackMessage from "../../SnackBarMessage/SnackMessage";
import ApplicationRequirement from "../AddUniversity/ApplicationRequirement/ApplicationRequirement";
import Features from "../AddUniversity/Features/Features";
import InstituteDetails from "../AddUniversity/InstituteDetails/InstituteDetails";
import UniversityCourses from "./UniversityCourses";

const UpdateUniversity = () => {
  const { id } = useParams();
  const { data: getSingleUniversity, refetch } =
    useGetSingleUniversityQuery(id);
  const [updateUniversity] = useUpdateUniversityMutation();
  const [updateUniversityAppReq] = useUpdateUniversityAppReqMutation();
  const [updateUniversityFeatures] = useUpdateUniversityFeaturesMutation();
  const [addCoursesToServer] = useAddCoursesToServerMutation();
  const [deleteCourses] = useDeleteCoursesMutation();
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
  const [uploadedLogo, setUploadedLogo] = useState("");
  // img local state
  const [instituteImages, setInstituteImages] = useState([]);
  const [livingCostDuration, setLivingCostDuration] = useState("");
  // doc local state
  const [instituteDocuments, setInstituteDocuments] = useState([]);
  const [aboutDocuments, setAboutDocuments] = useState("");
  const [aboutInstitute, setAboutInstitute] = useState("");
  const [commission, setCommission] = useState("");
  const [mapLocation, setMapLocation] = useState("");
  const [selectionModel, setSelectionModel] = useState([]);

  // requirements state - under the university
  const [requirements, setRequirements] = useState([]);

  // programs state - under the university
  const [programs, setPrograms] = useState([]);

  // features - under the university
  const [features, setFeatures] = useState([]);

  // add courses - under the courses
  const [courses, setCourses] = useState([]);
  const [addCourses, setAddCourses] = useState([]);

  useEffect(() => {
    if (getSingleUniversity) {
      setInstituteName(getSingleUniversity.institute_name);
      setCountryOfInstitute(getSingleUniversity.country_of_institute);
      setCityOfInstitute(getSingleUniversity.city_of_institute);
      setAddressOfInstitute(getSingleUniversity.address_of_institute);
      setFoundedYear(getSingleUniversity.founded_year);
      setInstituteId(getSingleUniversity.institute_id);
      setProviderId(getSingleUniversity.provider_id);
      setTypeOfInstitute(getSingleUniversity.type_of_institute);
      setCostOfLiving(getSingleUniversity.cost_of_living);
      setWebsiteUrl(getSingleUniversity.website_url);
      setQsRanking(getSingleUniversity.qs_ranking);
      setNationalRanking(getSingleUniversity.national_ranking);
      setWorldRanking(getSingleUniversity.world_ranking);
      setYoutubeLink(getSingleUniversity.youtube_link);
      setInstitutePartnership(getSingleUniversity.institute_partnership);
      setDeliveryMethod(getSingleUniversity.delivery_method);
      setAboutDocuments(getSingleUniversity.about_documents);
      setAboutInstitute(getSingleUniversity.about_institute);
      setCommission(getSingleUniversity.commission);
      const getMapLocation =
        getSingleUniversity.latitude + ", " + getSingleUniversity.longitude;
      if (getSingleUniversity?.latitude && getSingleUniversity?.longitude) {
        setMapLocation(getMapLocation);
      }
      setUploadedLogo(getSingleUniversity?.institute_logo_url);
      setInstituteImages(getSingleUniversity.images);
      setInstituteDocuments(getSingleUniversity.documents);
      setRequirements(getSingleUniversity.application_requirements);
      setPrograms([]);
      setFeatures(getSingleUniversity.features);
      setLivingCostDuration(getSingleUniversity?.living_cost_duration);
      setCourses(getSingleUniversity.courses);
    }
  }, [getSingleUniversity]);

  // submit university data
  const handleSubmit = async () => {
    const formData = new FormData();

    setLoading(true);

    for (let i = 0; i < instituteLogo.length; ) {
      const element = instituteLogo[i];
      formData.append("logo", element);
      i++;
    }

    // get uploaded files
    const getUploadedImages = instituteImages.filter((img) => img?.query_id);
    formData.append("uploaded_images", JSON.stringify(getUploadedImages));

    for (let i = 0; i < instituteImages.length; ) {
      const image = instituteImages[i];
      if (!image?.query_id) {
        formData.append("images", image);
      }
      i++;
    }

    // get uploaded documents
    const getUploadedDoc = instituteDocuments.filter((doc) => doc?.query_id);
    formData.append("uploaded_documents", JSON.stringify(getUploadedDoc));

    for (let i = 0; i < instituteDocuments.length; ) {
      const doc = instituteDocuments[i];
      if (!doc?.query_id) {
        formData.append("documents", doc);
      }
      i++;
    }

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
    formData.append("living_cost_duration", livingCostDuration);
    formData.append(
      "institute_logo_url",
      getSingleUniversity?.institute_logo_url
    );
    const getLocation = mapLocation.split(",");
    if (getLocation?.length === 2) {
      formData.append("latitude", getLocation[0]);
      formData.append("longitude", getLocation[1]?.trimStart());
    }

    await updateUniversity({
      data: formData,
      id: getSingleUniversity?.query_id,
    })
      .unwrap()
      .then((d) => {
        refetch(id);
        setMessage({
          error: false,
          message: "University Successfully Updated.",
        });
        setOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setLoading(false);
      })
      .catch((e) => {
        setMessage({
          error: true,
          message: "Something went wrong. Update Operation failed.",
        });
        setOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setLoading(false);
      });
  };

  // handle features submit
  const handleFeaturesSubmit = () => {
    setLoading(true);
    updateUniversityFeatures({
      query_id: getSingleUniversity?.query_id,
      features,
    })
      .unwrap()
      .then((d) => {
        refetch(id);
        setMessage({
          error: false,
          message: "University Features Successfully Updated.",
        });
        setOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setLoading(false);
      })
      .catch((e) => {
        setMessage({
          error: true,
          message: "Something went wrong. Update Operation failed.",
        });
        setOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setLoading(false);
      });
  };

  // handle application requirements
  const handleApplicationRequirement = () => {
    setLoading(true);
    updateUniversityAppReq({
      query_id: getSingleUniversity?.query_id,
      requirements,
    })
      .unwrap()
      .then((d) => {
        refetch(id);
        setMessage({
          error: false,
          message: "Application Requirements Successfully Updated.",
        });
        setOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setLoading(false);
      })
      .catch((e) => {
        setMessage({
          error: true,
          message: "Something went wrong. Update Operation failed.",
        });
        setOpen(true);
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        setLoading(false);
      });
  };

  const handleAddCourses = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("courses", JSON.stringify(addCourses));
    formData.append("query_id", id);
    addCoursesToServer(formData)
      .unwrap()
      .then((d) => {
        setMessage({
          error: false,
          message: "Course successfully added",
        });
        setLoading(false);
        setAddCourses([]);
        refetch(id);
        setOpen(true);
      })
      .catch((e) => {
        setMessage({
          error: true,
          message: "Something went wrong. Please, try again.",
        });
        setLoading(false);
        setOpen(true);
      });
  };

  // handle delete
  const handleDelete = () => {
    setLoading(true);
    const getCourseIds = selectionModel.map((id) => {
      const getItem = courses.find((course) => course.id === id);
      return {
        id: getItem?.id,
        query_id: getItem?.query_id,
      };
    });
    deleteCourses(getCourseIds)
      .unwrap()
      .then((d) => {
        setMessage({
          error: false,
          message: "Courses Successfully Deleted",
        });
        setLoading(false);
        refetch(id);
        setOpen(true);
      })
      .catch((e) => {
        setMessage({
          error: true,
          message: "Something went wrong. Please, try again.",
        });
        setLoading(false);
        setOpen(true);
      });
  };
  return (
    <div className="w-full min-h-screen grid place-items-center">
      <SnackMessage open={open} setOpen={setOpen} message={message} />
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[400px] sm:w-[600px] md:w-[960px]">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          Update University
        </h1>
        {/* institute details */}
        <InstituteDetails
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
          uploadedLogo={uploadedLogo}
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
          livingCostDuration={livingCostDuration}
          setLivingCostDuration={setLivingCostDuration}
        />

        <button
          disabled={loading}
          onClick={() => handleSubmit()}
          className={`w-full px-4 py-2 ${
            loading
              ? "bg-gray-200 hover:bg-gray-300 cursor-wait"
              : "bg-blue-500 hover:bg-blue-600"
          } active:scale-95 duration-200 text-white font-medium rounded-md mt-6`}>
          {loading ? <CircularProgress /> : "Submit"}
        </button>
      </div>
      {/* update courses */}
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[400px] sm:w-[600px] md:w-[960px] mt-6">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          Update Courses
        </h1>
        <UniversityCourses
          courses={courses}
          addCourses={addCourses}
          setAddCourses={setAddCourses}
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModel}
          handleDelete={handleDelete}
        />
        <button
          disabled={loading}
          onClick={() => handleAddCourses()}
          className={`w-full px-4 py-2 ${
            loading
              ? "bg-gray-200 hover:bg-gray-300 cursor-wait"
              : "bg-blue-500 hover:bg-blue-600"
          } active:scale-95 duration-200 text-white font-medium rounded-md mt-6`}>
          {loading ? <CircularProgress /> : "Submit"}
        </button>
      </div>
      {/* update features */}
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[400px] sm:w-[600px] md:w-[960px] mt-6">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          Update Features
        </h1>
        <Features features={features} setFeatures={setFeatures} />
        <button
          disabled={loading}
          onClick={() => handleFeaturesSubmit()}
          className={`w-full px-4 py-2 ${
            loading
              ? "bg-gray-200 hover:bg-gray-300 cursor-wait"
              : "bg-blue-500 hover:bg-blue-600"
          } active:scale-95 duration-200 text-white font-medium rounded-md mt-6`}>
          {loading ? <CircularProgress size={22} /> : "Submit"}
        </button>
      </div>
      {/* update application requirements */}
      <div className="bg-white p-4 sm:p-6 rounded-md shadow-md w-[400px] sm:w-[600px] md:w-[960px] mt-6">
        <h1 className="text-center text-2xl font-semibold text-gray-700 mb-10">
          Update Application Requirement
        </h1>
        <ApplicationRequirement
          requirements={requirements}
          setRequirements={setRequirements}
        />
        <button
          disabled={loading}
          onClick={() => handleApplicationRequirement()}
          className={`w-full px-4 py-2 ${
            loading
              ? "bg-gray-200 hover:bg-gray-300 cursor-wait"
              : "bg-blue-500 hover:bg-blue-600"
          } active:scale-95 duration-200 text-white font-medium rounded-md mt-6`}>
          {loading ? <CircularProgress size={22} /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default UpdateUniversity;
