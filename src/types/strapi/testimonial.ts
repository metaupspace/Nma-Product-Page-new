export interface TransformedTestimonial {
    documentId: string;
    name: string;
    image: string;
    designation: string;
    testimonial: string;
}

export interface TestimonialData {
    documentId: string;
    name: string;
    image: { url: string };
    designation: string;
    testimonial: string;
}