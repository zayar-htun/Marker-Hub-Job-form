const api = "https://dev.gigagates.com/job-applications-backend";

// https://dev.gigagates.com/job-applications-backend/v1/job/jobForm/listAllShop

export async function getalljobs() {
    const res = await fetch(`${api}/v1/job/jobForm/listAllShop`);
    if (!res.ok) return false;

    const jobs = await res.json();
    return jobs;
}

// {{base_url}}/v1/job/jobForm/

export async function getApplyJob(
    title,
    description,
    name,
    age,
    email,
    phone,
    genderBackend,
    religionBackend,
    nationBackend,
    maritalBackend,
    skills,
    edu,
    jobGuid,
    motivation,
    policeCer,
    photo,
    address,
    nrcFront,
    nrcBack
) {
    const requestBody = {
        title: title,
        description: description,
        name: name,
        age: age,
        email: email,
        phone: phone,
        skills: skills,
        education_level: edu,
        jobGuid: jobGuid,
        motivation: motivation,
        gender:genderBackend,
        nation: nationBackend,
        religion: religionBackend,
        marital_status: maritalBackend,
        nrc: "-",
        police_certification: policeCer,
        photo: photo,
        address: address,
        front_nrc: nrcFront,
        back_nrc: nrcBack,
    };

    const res = await fetch(`${api}/v1/job/jobForm/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
    });
    console.log(requestBody);

    if (res.status === 409) {
        return 409;
    }

    if (res.ok) {
        let result = await res.json();
        return result;
    }

    return false;
}
