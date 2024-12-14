import React from "react";
import ModuleCard from "../components/ModuleCard";
import ModuleData from "../module.json"; // Import the JSON file


function ModuleReview() {
    return (
        <div>
            <h1>Module Review Page</h1>
            {Object.keys(ModuleData).map(courseCode => {
                const { courseName, description } = ModuleData[courseCode];
                return (
                    <ModuleCard 
                        key={courseCode}
                        courseCode={courseCode} 
                        courseName={courseName}
                        description={description}
                        route={`/module/${courseCode}`}  // Link to the module-specific page
                    />
                );
            })}
        </div>
    );
}

export default ModuleReview;


