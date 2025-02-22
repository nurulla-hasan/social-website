import * as yup from "yup";

type Interests = {
  selfCare: string[];
  sports: string[];
  pets: string[];
  music: string[];
  traveling: string[];
};

export interface FormValues {
  // Step 01
  userName: string;

  // Step 02
  birthDay: string;

  // Step 03
  gender: string; // radio box | male, female and other

  // Step 04
  addPhotos: [string]; // as array

  // Step 05
  distance?: string; // add in this form skip button

  // Step 06
  schoolName: string;
  graduationYear?: string; // optional

  // Step 07
  height?: string; // optional & add in this form skip button

  // Step 08
  lookingFor?: string; // checkbox but button type checkbox button selected (long-term partner, long-term open to short, Short-term, open to long, Short-term fun, New friends , Still figuring it out) add in this form skip button

  // Step 09
  relationShip?: string; // checkbox but button type checkbox button selected (Single, In a Relationship, Married, Engaged, Divorced, Widowed , Prefer Not to Answer, "other") add in this form skip button, note: if others select so a input filed is require for this value

  // Step 10
  skinColor?: string; //checkbox but button type checkbox button selected (White (Caucasian), Black or African American,Hispanic or Latino) add in this form skip button

  // Step 11
  interest?: Interests; //checkbox but button type checkbox button selected, add in this form skip button

  // Step 12
  hairColor?: string; //checkbox but button type checkbox button selected (black, white, red... others) add in this form skip button, note: if others select so a input filed is require for this value.

  // Step 13
  profession?: string;
}

// Helper function for image validation (max 4 images)
const MAX_IMAGES = 4;
const imageGallerySchema = yup
  .array()
  .of(yup.mixed())
  .max(MAX_IMAGES, `You can add up to ${MAX_IMAGES} images.`);

export const stepSchemas = [
  yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
  }),

  yup.object().shape({
    graduationYear: yup
      .number()
      .min(1900)
      .max(new Date().getFullYear())
      .required("Graduation year is required"),
    schoolName: yup.string().required("School name is required"),
  }),
  yup.object().shape({
    height: yup.string().required("Height is required"),
    relationType: yup.string().required("Relationship status is required"),
  }),
  yup.object().shape({
    distance: yup.number().min(1).max(100).required("Please select a distance"),
    imageGallery: imageGallerySchema,
  }),
];
