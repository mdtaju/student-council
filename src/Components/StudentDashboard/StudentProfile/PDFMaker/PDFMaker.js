import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Logo from "../../../../assets/logo/logo.png";

// Create styles
const styles = StyleSheet.create({
  page: {
    //     flexDirection: "row",
    backgroundColor: "#E4E4E4",
    padding: 48,
    width: "100%",
    height: "100%",
  },
  section: {
    width: "100%",
    height: "100%",
    fontSize: 12,
  },
  logoContainer: {
    width: "80px",
    margin: "0px auto",
  },
  header: {
    paddingBottom: 5,
    marginBottom: 5,
    borderBottom: "1px solid gray",
  },
  topTitleBlog: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  infoBlog: {
    width: "100%",
    padding: 10,
    border: "1px solid gray",
    gap: 10,
    marginBottom: 30,
  },
  pairBlog: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const PDFMaker = ({ studentData }) => {
  // personal info
  const {
    address,
    city,
    country,
    state,
    country_of_citizenship,
    date_of_birth,
    email,
    first_language,
    first_name,
    gender,
    middle_name,
    last_name,
    marital_status,
    passport_number,
    passport_expiry_date,
    phone,
    query_id,
    zip_code,
    created_at,
  } = studentData?.personal_info;

  // education summary
  const {
    country_of_education,
    grade_average,
    grading_scheme,
    graduated_from_recent_school,
    highest_level_of_education,
  } = studentData?.education_info;

  // test score
  const {
    english_exam_type,
    date_of_exam,
    listening,
    reading,
    writing,
    specking,
    overall,
  } = studentData?.test_score;

  // additional qualification
  const {
    gmat_exam_date,
    gmat_quantitative_rank,
    gmat_quantitative_score,
    gmat_total_rank,
    gmat_total_score,
    gmat_verbal_rank,
    gmat_verbal_score,
    gmat_writing_rank,
    gmat_writing_score,
    gre_exam_date,
    gre_quantitative_score,
    gre_quantitative_rank,
    gre_verbal_rank,
    gre_verbal_score,
    gre_writing_rank,
    gre_writing_score,
    is_gmat_exam,
    is_gre_exam,
  } = studentData?.additional_qualification;

  // background info
  const { refused_visa, visa_details, visa_question_ans } =
    studentData?.background_info;

  const [finalPages, setFinalPages] = useState(<></>);
  const getSchools = studentData?.school_attend;
  const schoolsLength = getSchools?.length;
  const totalPages = Math.ceil(schoolsLength / 2);

  useEffect(() => {
    if (totalPages > 0) {
      let blogs = [];
      let pages = [];
      for (let i = 0; i < getSchools.length; ) {
        const element = getSchools[i];
        const {
          attend_institute_from,
          attend_institute_to,
          country_of_institute,
          degree_name,
          graduated_date,
          graduated_from_this_institute,
          institute_address,
          institute_city,
          institute_state,
          institute_zip_code,
          is_physical_certificate,
          level_of_education,
          name_of_institute,
          primary_language_of_institute,
        } = element;
        let makeBlog = (
          <View key={i} style={styles.infoBlog}>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Country of Institution: {country_of_institute}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Name of Institution: {name_of_institute} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Level of Education: {level_of_education} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>
                  Primary Language of Instruction:{" "}
                  {primary_language_of_institute}{" "}
                </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>
                  Attended Institution From:{" "}
                  {moment(attend_institute_from).format("LL")}{" "}
                </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>
                  Attended Institution To:{" "}
                  {moment(attend_institute_to).format("LL")}{" "}
                </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Degree Name: {degree_name} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>
                  Graduated from this institution:{" "}
                  {graduated_from_this_institute}{" "}
                </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>
                  Graduation Date: {moment(graduated_date).format("LL")}
                </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>
                  Certificate for this degree: {is_physical_certificate}{" "}
                </Text>
              </View>
            </View>
            {/* school address */}
            <Text style={{ fontSize: "13px", fontWeight: 500 }}>
              School Address
            </Text>
            {/* address */}
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Address: {institute_address} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>City/Town: {institute_city} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Provence/State: {institute_state} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Postal/Zip Code: {institute_zip_code} </Text>
              </View>
            </View>
          </View>
        );
        blogs.push(makeBlog);
        i++;
      }

      // pages loop
      for (let j = 0; j < totalPages; ) {
        const indexFrom = 2 * j;
        const indexTo = indexFrom + 2;
        const getBlog = blogs?.slice(indexFrom, indexTo);
        let getPage = (
          <View key={j} style={styles.section}>
            {j === 0 && (
              <Text style={{ marginBottom: 15, fontSize: 14 }}>
                Schools Attended
              </Text>
            )}
            <Text style={{ marginBottom: 5 }}>Institute NO: {j + 1}</Text>
            {getBlog?.map((blog) => blog)}
          </View>
        );
        pages.push(getPage);
        j++;
      }
      let allPages = pages?.map((Page) => Page);
      setFinalPages(allPages);
    }
  }, [totalPages, getSchools]);
  // console.log(schoolBlog?.length);

  return (
    <Document>
      <Page size="A4" wrap={true} style={styles.page}>
        {/* main container */}
        <View style={styles.section}>
          {/* header start */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image style={{ width: "100%" }} src={Logo} />
            </View>
            <Text style={{ textAlign: "center", fontSize: "22px" }}>
              Student Council
            </Text>
            <Text style={{ textAlign: "center", fontSize: "12px" }}>
              Shah Niketon (5th Floor), GEC Circle, Chittagong
            </Text>
          </View>
          {/* header end */}

          {/* top title blog start */}
          <View style={styles.topTitleBlog}>
            <Text>Student ID: {query_id}</Text>
            <Text>Create At: {moment(created_at).format("LL")}</Text>
          </View>
          {/* top title blog end */}

          {/* personal info start */}
          <Text style={styles.title}>Personal Information</Text>

          {/* personal info main border blog start */}
          <View style={styles.infoBlog}>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>First Name: {first_name}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Middle Name: {middle_name}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Last Name: {last_name}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Date of Birth: {moment(date_of_birth).format("LL")}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Country of Citizenship: {country_of_citizenship}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Passport Number: {passport_number}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>
                  Passport Expiry Date:{" "}
                  {moment(passport_expiry_date).format("LL")}
                </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Marital Status: {marital_status}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Gender: {gender}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>First Language: {first_language}</Text>
              </View>
            </View>
            {/* address */}
            <Text style={{ fontSize: "13px", fontWeight: 500 }}>
              Address Details
            </Text>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Address: {address}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>City/Town: {city}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Country: {country}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Provence/State: {state}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Postal/Zip Code: {zip_code}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Email: {email}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Phone Number: {phone}</Text>
              </View>
            </View>
          </View>
          {/* personal info main border blog end */}

          {/* education info start */}
          <Text style={styles.title}>Education Summery</Text>

          {/* education info main border blog start */}
          <View style={styles.infoBlog}>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Country of Education: {country_of_education}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>
                  Highest Level of Education: {highest_level_of_education}
                </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Grading Scheme: {grading_scheme}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Grade Average: {grade_average}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>
                  Graduated from most recent school:{" "}
                  {graduated_from_recent_school}
                </Text>
              </View>
            </View>
          </View>

          {/* test scores info start */}
          <Text style={styles.title}>Test Scores</Text>

          {/* test scores info main border blog start */}
          <View style={styles.infoBlog}>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>English Exam Type: {english_exam_type}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Date of Exam: {moment(date_of_exam).format("LL")}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Listening: {listening}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Reading: {reading}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Writing: {writing}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Specking: {specking}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Overall: {overall}</Text>
              </View>
            </View>
          </View>
        </View>
        {/* page two start */}
        <View style={styles.section}>
          <Text style={styles.title}>Additional Qualification</Text>
          {/* additional qualification info main border blog start */}
          <View style={styles.infoBlog}>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>GRE exam: {is_gre_exam}</Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Exam Date: {moment(gre_exam_date).format("LL")}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Verbal Score: {gre_verbal_score} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Verbal Rank: {gre_verbal_rank} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Quantitative Score: {gre_quantitative_score} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Quantitative Rank: {gre_quantitative_rank} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Writing Score: {gre_writing_score} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Writing Rank: {gre_writing_rank} </Text>
              </View>
            </View>
            {/* gmat exam */}
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>GMAT exam: {is_gmat_exam} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Exam Date: {moment(gmat_exam_date).format("LL")} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Verbal Score: {gmat_verbal_score} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Verbal Rank: {gmat_verbal_rank} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Quantitative Score: {gmat_quantitative_score} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Quantitative Rank: {gmat_quantitative_rank} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Writing Score: {gmat_writing_score} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Writing Rank: {gmat_writing_rank} </Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Total Score: {gmat_total_score} </Text>
              </View>
              <View style={{ width: "300px" }}>
                <Text>Total Rank: {gmat_total_rank} </Text>
              </View>
            </View>
          </View>
          {/* additional qualification info main border blog end */}
          <Text style={styles.title}>Background Information</Text>
          {/* additional qualification info main border blog start */}
          <View style={styles.infoBlog}>
            <View style={styles.pairBlog}>
              <View style={{ width: "300px" }}>
                <Text>Have you been refused a visa?: {refused_visa}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "100%" }}>
                <Text>If yes then ans is: {visa_details}</Text>
              </View>
            </View>
            <View style={styles.pairBlog}>
              <View style={{ width: "100%" }}>
                <Text>Valid study permit visa: {visa_question_ans} </Text>
              </View>
            </View>
          </View>
        </View>

        {/* attend schools */}
        {finalPages}
        <Text
          style={{ fontSize: 12, textAlign: "right" }}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
};

export default PDFMaker;
