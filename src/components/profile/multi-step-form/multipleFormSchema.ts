import * as yup from "yup";

export const validationSchemas = [
  // 🟢 Step 1: User Name (Required)
  yup.object().shape({
    userName: yup.string().required("User Name is required"),
  }),

  // 🟢 Step 2: Birth Date (Required)
  yup.object().shape({
    birthDay: yup.string().required("Birth date is required"),
  }),

  // 🟢 Step 3: Gender (Required)
  yup.object().shape({
    gender: yup.string().required("Please select your gender"),
  }),

  // 🟢 Step 4: Add Photos (At least 1 photo)
  yup.object().shape({
    addPhotos: yup.array().min(1, "Please upload at least one photo"),
  }),

  // 🟢 Step 5: Distance (Optional)
  yup.object().shape({
    distance: yup.string().notRequired(),
  }),

  // 🟢 Step 6: School Name (Required) & Graduation Year (Optional)
  yup.object().shape({
    schoolName: yup.string().required("School name is required"),
    graduationYear: yup.string().notRequired(),
  }),

  // 🟢 Step 7: Height (Optional)
  yup.object().shape({
    height: yup.string().notRequired(),
  }),

  // 🟢 Step 8: Looking For (Required)
  yup.object().shape({
    lookingFor: yup.array().min(1, "Please select at least one option"),
  }),

  // 🟢 Step 9: Relationship Status (Required, Special Case for "Other")
  yup.object().shape({
    relationShip: yup.array().min(1, "Please select your relationship status"),
    relationShipOther: yup
      .string()
      .when("relationShip", (relationShip, schema) =>
        relationShip.includes("Other")
          ? schema.required("Please specify your relationship status")
          : schema.notRequired()
      ),
  }),

  // 🟢 Step 10: Skin Color (Required)
  yup.object().shape({
    skinColor: yup.string().required("Please select a skin color"),
  }),

  // 🟢 Step 11: Interests (Optional)
  yup.object().shape({
    interest: yup.object().notRequired(),
  }),

  // 🟢 Step 12: Hair Color (Required, Special Case for "Other")
  yup.object().shape({
    hairColor: yup.string().required("Please select your hair color"),
    hairColorOther: yup.string().when("hairColor", (hairColor, schema) =>
      // @ts-ignore
      hairColor === "Other"
        ? schema.required("Please specify your hair color")
        : schema.notRequired()
    ),
  }),

  // 🟢 Step 13: Profession (Required)
  yup.object().shape({
    profession: yup.string().required("Profession is required"),
  }),
];
