import React from "react";
import { RiVipDiamondFill } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { MdDoneOutline } from "react-icons/md";
import "../App.css";
import "@fontsource/urbanist";
import illustration from "./referIllustration.svg";
// import { useNavigate } from "react-router-dom";

const referInstruction = [
  {
    text: "Copy Link",
    icon: <MdContentCopy />,
  },
  {
    text: " Friends registered sucessfully",
    icon: <MdDoneOutline />,
  },
  {
    text: "Earn Diamonds rewards",
    icon: <RiVipDiamondFill />,
  },
];

const Profiel = () => {
  // const navigator = useNavigate()

  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "100vw",
          justifyContent: "space-between",
          fontFamily: "urbanist, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 16px",
            border: "1px solid #ffffff",
            borderRadius: 10,
            fontSize: "24px",
          }}
        >
          <p
            style={{
              color: "white",
            }}
          >
            Refer & Earn
          </p>
          <div
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            <RiVipDiamondFill />
            <span style={{ color: "white", marginLeft: 8 }}>200 = INR 200</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={illustration}
            style={{ maxHeight: "300px", margin: "-40px 0" }}
          />
          <div
            style={{
              color: "white",
              fontSize: "24px",
            }}
          >
            Refer to your friend and Get a Dimond reward of 100 diamonds
          </div>
          <p
            style={{
              marginTop: "8px",
              color: "white",
              padding: "12px",
              fontSize: "16px",
            }}
          >
            Share this link with your Friend and after they install, both of you
            will get 100 Diamonds
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "16px",
              padding: "8px 16px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              color: "white",
              fontSize: "16px",
            }}
            // onClick={() =>
            //   navigator.clipboard.writeText("Copy this text to clipboard")
            // }
          >
            <span
              style={{
                marginRight: "8px",
              }}
            >
              BL4FF
            </span>
            <MdContentCopy />
          </div>
        </div>
        <div
          style={{
            marginTop: "24px",
            padding: "24px 0",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <p
            style={{
              display: "flex",
              fontSize: "16px",
              alignItem: "center",
              textAlign: "center",
              justifyContent: "center",
              color: "white",
            }}
          >
            To understand how to referral works.
          </p>
          <div
            style={{
              display: "flex",
              gap: "8px",
              justifyContent: "center",
              // alignItems: "center",
              marginTop: "16px",
            }}
          >
            <div className="refer-instruction-grid">
              {referInstruction.map((instruction) => (
                <div
                  style={{
                    // flex: 1,
                    alignItems: "center",
                    textAlign: "center",
                    padding: "20px 24px",
                    border: " 1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{}}>
                    <div
                      style={{
                        fontSize: "16px",
                        marginBottom: "8px",
                        color: "white",
                      }}
                    >
                      {instruction.icon}
                    </div>
                    <p
                      style={{
                        color: "white",
                        fontSize: "16px",
                      }}
                    >
                      {instruction.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <p style={{ color: "white", fontSize: "18px" }}>
            Do you have a refferal code ?
          </p>
          <div
            style={{
              display: "flex",
              flex: "1",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <div style={{ marginRight: "24px" }}>
              <input
                type="text"
                placeholder={"Enter refferal code here"}
                style={{
                  backgroundcolor: "transparent",
                  padding: "16px",
                  color: "white",
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  border: "1px solid #707070",
                }}
              />
            </div>

            <div>
              <button
                className="btn"
                style={{
                  backgroundImage:
                    "linear-gradient(45deg,#4f2855,#9c4364,#db6f61,#fcaf5a",
                  border: "none",
                  color: "white",
                  padding: "16px 20px",
                  justifyContent: "center",
                  fontSize: "16px",
                  borderRadius: "8px",
                  position: "relative",
                }}
              >
                Refer friend
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiel;
