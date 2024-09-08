import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const DiseasesPagesInfo = ({ path }) => {
  const symptomsRef = useRef();
  const causesRef = useRef();
  const riskFactorsRef = useRef();
  const complicationsRef = useRef();
  const preventionRef = useRef();
  const navigate = useNavigate();

  return (
    <>
      <ButtonsSection>
        <Button
          className="list-buttons"
          variant="contained"
          onClick={() => {
            symptomsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Symptoms
        </Button>
        <Button
          className="list-buttons"
          variant="contained"
          onClick={() => {
            causesRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Causes
        </Button>
        <Button
          className="list-buttons"
          variant="contained"
          onClick={() => {
            riskFactorsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Risk Factors
        </Button>
        <Button
          className="list-buttons"
          variant="contained"
          onClick={() => {
            complicationsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Complications
        </Button>
        <Button
          className="list-buttons"
          variant="contained"
          onClick={() => {
            preventionRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Prevention
        </Button>
        <Button
          className="list-buttons-diagnosis"
          variant="contained"
          onClick={() => {
            navigate(path);
          }}
        >
          Start The Diagnosis
        </Button>
      </ButtonsSection>
      <ThirdSection ref={symptomsRef}>
        <h1>Symptoms</h1>
        <p>Some of the symptoms of type 1 diabetes and type 2 diabetes are:</p>
        <ul>
          <li>feeling more thirsty than usual.</li>
          <li>Urinating often.</li>
          <li>Losing weight without trying.</li>
          <li>
            Presence of ketones in the urine. Ketones are a byproduct of the
            breakdown of muscle and fat that happens when there's not enough
            available insulin.
          </li>
          <li>Feeling tired and weak.</li>
          <li>Feeling irritable or having other mood changes.</li>
          <li>Having blurry vision.</li>
          <li>Having slow-healing sores.</li>
          <li>
            Getting a lot of infections, such as gum, skin and vaginal
            infections.
          </li>
        </ul>
      </ThirdSection>
      <Section_Four ref={causesRef}>
        <h1>Causes</h1>
        <p>
          To understand diabetes, it's important to understand how the body
          normally uses glucose.
        </p>
        <div className="sub-title">
          <h1 className="sub-h1">How insulin works</h1>
          <p>
            Insulin is a hormone that comes from a gland behind and below the
            stomach pancreas.
          </p>
          <ul>
            <li>The pancreas releases insulin into the bloodstream</li>
            <li>The insulin circulates, letting sugar enter the cells</li>
            <li>Insulin lowers the amount of sugar in the bloodstream</li>
            <li>
              As the blood sugar level drops, so does the secretion of insulin
              from the pancreas
            </li>
          </ul>
          <h1 className="sub-h1">The role of glucose</h1>
          <p>
            Glucose — a sugar — is a source of energy for the cells that make up
            muscles and other tissues.
          </p>
          <ul>
            <li>Glucose comes from two major sources: food and the liver.</li>
            <li>
              Sugar is absorbed into the bloodstream, where it enters cells with
              the help of insulin.
            </li>
            <li>The liver stores and makes glucose.</li>
            <li>
              When glucose levels are low, such as when you haven't eaten in a
              while, the liver breaks down stored glycogen into glucose. This
              keeps your glucose level within a typical range.
            </li>
          </ul>
          <p className="description">
            The exact cause of most types of diabetes is unknown. In all cases,
            sugar builds up in the bloodstream. This is because the pancreas
            doesn't produce enough insulin. Both type 1 and type 2 diabetes may
            be caused by a combination of genetic or environmental factors. It
            is unclear what those factors may be.
          </p>
        </div>
      </Section_Four>
      <Section_Five ref={riskFactorsRef}>
        <h1>Risk factors</h1>
        <p>
          Risk factors for diabetes depend on the type of diabetes. Family
          history may play a part in all types. Environmental factors and
          geography can add to the risk of type 1 diabetes.
        </p>
        <p>
          Sometimes family members of people with type 1 diabetes are tested for
          the presence of diabetes immune system cells (autoantibodies). If you
          have these autoantibodies, you have an increased risk of developing
          type 1 diabetes. But not everyone who has these autoantibodies
          develops diabetes.
        </p>
        <p>
          Race or ethnicity also may raise your risk of developing type 2
          diabetes. Although it's unclear why, certain people — including Black,
          Hispanic, American Indian and Asian American people — are at higher
          risk.
        </p>
        <p>
          Prediabetes, type 2 diabetes and gestational diabetes are more common
          in people who are overweight or obese.
        </p>
      </Section_Five>
      <Section_Six ref={complicationsRef}>
        <h1>Complications</h1>
        <p>
          Long-term complications of diabetes develop gradually. The longer you
          have diabetes — and the less controlled your blood sugar — the higher
          the risk of complications. Eventually, diabetes complications may be
          disabling or even life-threatening. In fact, prediabetes can lead to
          type 2 diabetes. Possible complications include:
        </p>
        <ul>
          <li>
            <p className="sub-title-list">
              Heart and blood vessel (cardiovascular) disease.
            </p>
            Diabetes majorly increases the risk of many heart problems. These
            can include coronary artery disease with chest pain (angina), heart
            attack, stroke and narrowing of arteries (atherosclerosis). If you
            have diabetes, you're more likely to have heart disease or stroke.
          </li>
          <li>
            <p className="sub-title-list">
              Nerve damage from diabetes (diabetic neuropathy).
            </p>
            Too much sugar can injure the walls of the tiny blood vessels
            (capillaries) that nourish the nerves, especially in the legs. This
            can cause tingling, numbness, burning or pain that usually begins at
            the tips of the toes or fingers and gradually spreads upward.
          </li>
          <li>
            <p className="sub-title-list">
              Kidney damage from diabetes (diabetic nephropathy).
            </p>
            The kidneys hold millions of tiny blood vessel clusters (glomeruli)
            that filter waste from the blood. Diabetes can damage this delicate
            filtering system.
          </li>
          <li>
            <p className="sub-title-list">
              Eye damage from diabetes (diabetic retinopathy).
            </p>
            Diabetes can damage the blood vessels of the eye. This could lead to
            blindness.
          </li>
          <li>
            <p className="sub-title-list">Foot damage.</p>
            Nerve damage in the feet or poor blood flow to the feet increases
            the risk of many foot complications.
          </li>
          <li>
            <p className="sub-title-list">Skin and mouth conditions</p>
            Diabetes may leave you more prone to skin problems, including
            bacterial and fungal infections.
          </li>
          <li>
            <p className="sub-title-list">Hearing impairment</p>
            Hearing problems are more common in people with diabetes.
          </li>
          <li>
            <p className="sub-title-list">Alzheimer's disease. </p>
            Type 2 diabetes may increase the risk of dementia, such as
            Alzheimer's disease.
          </li>
          <li>
            <p className="sub-title-list">Depression related to diabetes.</p>
            Depression symptoms are common in people with type 1 and type 2
            diabetes.
          </li>
        </ul>
      </Section_Six>
      <Section_Seven ref={preventionRef}>
        <h1>Prevention</h1>
        <p>
          Type 1 diabetes can't be prevented. But the healthy lifestyle choices
          that help treat prediabetes, type 2 diabetes and gestational diabetes
          can also help prevent them:
        </p>
        <ul>
          <li>
            <p className="sub-title-list">Eat healthy foods</p>
            Choose foods lower in fat and calories and higher in fiber. Focus on
            fruits, vegetables and whole grains. Eat a variety to keep from
            feeling bored.
          </li>
          <li>
            <p className="sub-title-list">Get more physical activity. </p>
            Try to get about 30 minutes of moderate aerobic activity on most
            days of the week. Or aim to get at least 150 minutes of moderate
            aerobic activity a week. For example, take a brisk daily walk. If
            you can't fit in a long workout, break it up into smaller sessions
            throughout the day
          </li>
          <li>
            <p className="sub-title-list">Lose excess pounds</p>
            If you're overweight, losing even 7% of your body weight can lower
            the risk of diabetes. For example, if you weigh 200 pounds (90.7
            kilograms), losing 14 pounds (6.4 kilograms) can lower the risk of
            diabetes.
          </li>

          <p>
            Sometimes drugs are an option. Oral diabetes drugs such as metformin
            (Glumetza, Fortamet, others) may lower the risk of type 2 diabetes.
            But healthy lifestyle choices are important. If you have
            prediabetes, have your blood sugar checked at least once a year to
            make sure you haven't developed type 2 diabetes.
          </p>
        </ul>
      </Section_Seven>
    </>
  );
};

export default DiseasesPagesInfo;

const ButtonsSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 15px 15px 70px 15px;
  .list-buttons {
    background-color: rgb(35, 150, 250);
    font-family: myFont;
    @media (max-width: 395px) {
      width: 140px;
    }
  }
  .list-buttons-diagnosis {
    color: rgb(35, 150, 250);
    background-color: white;
    border: 1px solid rgb(35, 150, 250);
    font-family: myFont;
    &:hover {
      background-color: grey;
      color: white;
    }
    @media (max-width: 395px) {
      width: 140px;
    }
  }
`;

const ThirdSection = styled.div`
  font-family: myFont;
  color: grey;
  letter-spacing: 2px;
  padding: 0px 100px;
  margin-bottom: 25px;
  @media (max-width: 640px) {
    padding: 0px 30px;
  }
  h1 {
    color: rgb(35, 150, 250);
    margin: 0px 0px 15px 0px;
    border-bottom: 1px solid rgb(35, 150, 250);
    padding-bottom: 10px;
  }
  ul {
    li {
      margin-top: 10px;
    }
  }
`;

const Section_Four = styled.div`
  font-family: myFont;
  color: grey;
  letter-spacing: 2px;
  padding: 0px 100px;
  margin-bottom: 25px;

  @media (max-width: 640px) {
    padding: 0px 30px;
  }

  h1 {
    color: rgb(35, 150, 250);
    margin: 0px 0px 15px 0px;
    border-bottom: 1px solid rgb(35, 150, 250);
    padding-bottom: 10px;
  }
  .sub-title {
    margin-top: 20px;
    padding: 0px 50px;
    margin-bottom: 10px;
    @media (max-width: 640px) {
      padding: 0px 30px;
    }
    @media (max-width: 400px) {
      padding: 0px 20px;
    }
    .description {
      margin-top: 20px;
    }
    .sub-h1 {
      font-size: 17px;
      border: none;
      margin-bottom: 10px;
      margin-top: 20px;
      padding-bottom: 0px;
    }

    ul {
      @media (max-width: 400px) {
        padding-inline-start: 5px;
      }
      li {
        margin-top: 10px;
      }
    }
  }
`;

const Section_Five = styled.div`
  font-family: myFont;
  color: grey;
  letter-spacing: 2px;
  padding: 0px 100px;
  margin-bottom: 25px;
  @media (max-width: 640px) {
    padding: 0px 30px;
  }
  h1 {
    color: rgb(35, 150, 250);
    margin: 0px 0px 15px 0px;
    border-bottom: 1px solid rgb(35, 150, 250);
    padding-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
`;

const Section_Six = styled.div`
  font-family: myFont;
  color: grey;
  letter-spacing: 2px;
  padding: 0px 100px;
  margin-bottom: 25px;
  @media (max-width: 640px) {
    padding: 0px 30px;
  }
  h1 {
    color: rgb(35, 150, 250);
    margin: 0px 0px 15px 0px;
    border-bottom: 1px solid rgb(35, 150, 250);
    padding-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  .sub-title-list {
    margin-top: 20px;
    margin-bottom: 0px;
    color: rgb(35, 150, 250);
  }
`;

const Section_Seven = styled.div`
  font-family: myFont;
  color: grey;
  letter-spacing: 2px;
  padding: 0px 100px;
  margin-bottom: 25px;
  @media (max-width: 640px) {
    padding: 0px 30px;
  }
  h1 {
    color: rgb(35, 150, 250);
    margin: 0px 0px 15px 0px;
    border-bottom: 1px solid rgb(35, 150, 250);
    padding-bottom: 10px;
  }
  p {
    margin-bottom: 20px;
  }
  .sub-title-list {
    margin-top: 20px;
    margin-bottom: 0px;
    color: rgb(35, 150, 250);
  }
`;
