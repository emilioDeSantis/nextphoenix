import { Fragment } from "react";

export default function NumberedList({ title, list }) {
    console.log(list);
    return (
        <Fragment>
            <h3>{title}</h3>
            <hr />
            {list?.map((element, index) => {
                return (
                    <Fragment key={element.title}>
                        <section
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <div
                                style={{
                                    fontSize: "3rem",
                                    fontWeight: "700",
                                    opacity: "12%",
                                    position: 'absolute',
                                }}
                            >
                                {"0" + (index + 1)}
                            </div>
                            <div
                                style={{
                                    marginLeft: "6rem",
                                    marginRight: process.env.dimension.sideMargin,
                                    marginBlock: '0.5rem',
                                }}
                            >
                                <h4>
                                    {element.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: "0.7rem",
                                        margin: "0",
                                        marginTop: '0.5rem',
                                    }}
                                >
                                    {element.text}
                                </p>
                            </div>
                        </section>
                        <hr />
                    </Fragment>
                );
            })}
        </Fragment>
    );
}
