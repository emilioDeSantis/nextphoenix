export default function Bullet() {
    return (
        <div
            style={{
                display: "flex",
                width: "1rem",
                height: "1rem",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    background: "#44f",
                    width: "60%",
                    height: "60%",
                    borderRadius: "1rem",
                    boxShadow: "0 0 1rem  #44f",
                }}
            ></div>
            <div
                style={{
                    border: "0.1rem solid #44f",
                    borderRadius: "1rem",
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    boxShadow: "0 0 0.4rem  #44f",
                    background: "none",
                }}
            ></div>
        </div>
    );
}
