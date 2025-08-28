"use server"

const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSerP3Kaim0UJ-MhkWeNv4DpGT29fx2QBsc9KpmJF5uzp-KTQA/formResponse";

export async function generateLeads(name: string, email: string, subject: string, message: string) {
    try {
        const data = new URLSearchParams({
            "entry.363716936": name,
            "entry.801304692": email,
            "entry.1270758486": subject,
            "entry.127606658": message,
        });

        await fetch(GOOGLE_FORM_URL, {
            method: "POST",
            body: data,
            mode: "no-cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });

        return {
            success: true,
            message: "Contact information stored successfully",
        };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : "An error occurred"
        };
    }
}