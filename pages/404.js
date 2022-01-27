import React from "react";
import appConfig from "../config.json";
import { Box, Text } from "@skynexui/components";


export default function PageNotFound() {

    return (
        <>

            <Box
                styleSheet={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: appConfig.theme.colors.neutrals["000"],
                    backgroundImage:
                        "url(https://c4.wallpaperflare.com/wallpaper/514/950/389/space-fire-star-wars-galactic-empire-wallpaper-preview.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundBlendMode: "multiply",
                }}

            >
                <Box
                    styleSheet={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        flexDirection: {
                            xs: "column",
                            sm: "column",
                        },
                        width: "100%",
                        maxWidth: "450px",
                        borderRadius: "5px",
                        padding: "32px",
                        margin: "16px",
                        boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
                        backgroundColor: appConfig.theme.colors.neutrals[700],
                    }}

                >
                    <Text
                        variant="heading4"
                        styleSheet={{
                            marginBottom: "10px",
                            marginTop: "10px",
                            color: appConfig.theme.colors.neutrals[100],
                        }}                    >
                        <h2>PAGE NOT FOUND!</h2>
                    </Text>
                </Box>
            </Box>
        </>
    );
}