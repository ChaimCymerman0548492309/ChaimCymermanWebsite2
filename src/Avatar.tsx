import { Box } from '@mui/material';
import React from 'react'

function Avatar() {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          width: 128,
          height: 128,
          mx: "auto",
          mb: 3,
        }}
      >
        {/* Background circle */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6D4C41 0%, #D7CCC8 100%)",
            border: "4px solid white",
            boxShadow: 3,
          }}
        />

        {/* Avatar face */}
        <Box
          sx={{
            position: "absolute",
            width: "80%",
            height: "80%",
            top: "10%",
            left: "10%",
            borderRadius: "50%",
            backgroundColor: "#FFE0B2", // Light skin tone
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Glasses */}
          <Box
            sx={{
              width: "70%",
              height: "20%",
              mt: "25%",
              border: "2px solid #455A64",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          >
            <Box
              sx={{
                width: "45%",
                height: "100%",
                borderRight: "2px solid #455A64",
              }}
            />
            <Box sx={{ width: "45%", height: "100%" }} />
          </Box>

          {/* Smile */}
          <Box
            sx={{
              width: "40%",
              height: "10%",
              mt: "15%",
              borderBottom: "3px solid #E57373",
              borderRadius: "0 0 50% 50%",
            }}
          />

          {/* Beard stubble */}
          <Box
            sx={{
              width: "60%",
              height: "15%",
              mt: "5%",
              background:
                "repeating-linear-gradient(45deg, #795548, #795548 1px, transparent 1px, transparent 3px)",
            }}
          />

          {/* White shirt collar */}
          <Box
            sx={{
              width: "100%",
              height: "20%",
              mt: "auto",
              backgroundColor: "white",
              borderTop: "2px solid #B0BEC5",
              display: "flex",
              "&:before": {
                content: '""',
                width: "20%",
                height: "100%",
                borderRight: "2px solid #B0BEC5",
                borderBottom: "2px solid #B0BEC5",
                transform: "skewX(40deg)",
                marginRight: "30%",
              },
              "&:after": {
                content: '""',
                width: "20%",
                height: "100%",
                borderLeft: "2px solid #B0BEC5",
                borderBottom: "2px solid #B0BEC5",
                transform: "skewX(-40deg)",
                marginLeft: "30%",
              },
            }}
          />
        </Box>

        {/* Hair */}
        <Box
          sx={{
            position: "absolute",
            width: "85%",
            height: "40%",
            top: 0,
            left: "7.5%",
            backgroundColor: "#D2B48C", // Light brown/blonde hair
            borderRadius: "50% 50% 0 0",
            border: "1px solid #A1887F",
          }}
        />
      </Box>
    </div>
  );
}

export default Avatar