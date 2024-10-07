'use server';

export async function createInvoice(formData: FormData) {
    const rawFormData = {
        customerID: formData.get('customerID'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    //Test it out:
    console.log(rawFormData);
}