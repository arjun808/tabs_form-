interface ProgressBarProps {
  percentage: number;
}

const ProgressBar = ({ percentage }: ProgressBarProps) => {
  return (
    <div
      style={{
        width: "50%",
        height: "20px",
        backgroundColor: "gray",
        margin: "auto",
        border: "2px solid black",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
     
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          backgroundColor: "blue",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          padding: "0 10px",
          fontSize: "0.8rem",
          color: "white",
          transition: "width 0.6s linear",  
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
