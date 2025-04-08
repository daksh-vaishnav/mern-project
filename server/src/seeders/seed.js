import mongoose from 'mongoose';
import { Content } from '#models/content';
import { Course } from '#models/course';
import { Coupon } from '#models/coupon';
import { getHashPassword } from '#helpers/utils';
import { User } from '#models/user';

const dummyContents = [
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'video',
        link: 'https://www.youtube.com/watch?v=sU0PeFgjvic',
        metadata: { duration: '10:30', resolution: '720p' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'article',
        link: 'https://example.com/articles/css-selectors.html',
        metadata: { author: 'Alice Dev', readTime: '5 min' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'pdf',
        link: 'https://example.com/pdfs/javascript_guide.pdf',
        metadata: { pages: 25 },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'quiz',
        link: 'https://example.com/quizzes/js-basics',
        metadata: { questions: 10, difficulty: 'easy' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'video',
        link: 'https://www.youtube.com/watch?v=sSRaakd95Nk',
        metadata: { duration: '15:00', resolution: '1080p' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'article',
        link: 'https://example.com/articles/git-workflow.html',
        metadata: { author: 'Bob Repo', readTime: '8 min' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'pdf',
        link: 'https://example.com/pdfs/docker_cheatsheet.pdf',
        metadata: { pages: 3 },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'video',
        link: 'https://www.youtube.com/watch?v=ofHGE-85EIA',
        metadata: { duration: '12:45', resolution: '1080p' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'article',
        link: 'https://example.com/articles/networking_basics.html',
        metadata: { author: 'Net Ninja', readTime: '6 min' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'quiz',
        link: 'https://example.com/quizzes/linux-commands',
        metadata: { questions: 15, difficulty: 'medium' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'pdf',
        link: 'https://example.com/pdfs/cloud_computing_guide.pdf',
        metadata: { pages: 18 },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'video',
        link: 'https://www.youtube.com/watch?v=E5zXCY63WpU',
        metadata: { duration: '20:00', resolution: '1080p' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'article',
        link: 'https://example.com/articles/ci-cd-intro.html',
        metadata: { author: 'Jenkins Bot', readTime: '7 min' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'video',
        link: 'https://www.youtube.com/watch?v=5JYJlQpni6o',
        metadata: { type: 'tool', platform: 'web' },
    },
    {
        _id: new mongoose.Types.ObjectId(),
        type: 'quiz',
        link: 'https://example.com/quizzes/sql-queries',
        metadata: { questions: 12, difficulty: 'hard' },
    }
];


const dummyCourses = [
    {
        _id: new mongoose.Types.ObjectId(),
        title: "Full Stack Web Development",
        description: "Learn to build modern web applications using HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
        thumbnailImage: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
        chapters: [{
            name: "Introduction to Web Development",
            description: "Overview of web technologies and architecture.",
            thumbnailImage: "https://example.com/images/web_intro.jpg",
            contents: [dummyContents[0]._id, dummyContents[1]._id, dummyContents[2]._id],
            isActive: true
        },
        {
            name: "JavaScript Basics",
            description: "Learn syntax, variables, loops, and basic programming in JS.",
            thumbnailImage: "https://example.com/images/js_basics.jpg",
            contents: [dummyContents[3]._id, dummyContents[4]._id, dummyContents[5]._id, dummyContents[6]._id, dummyContents[7]._id, dummyContents[8]._id],
            isActive: true
        }],
        price: 99.99,
        isActive: true
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "Introduction to Cybersecurity",
        description: "Understand the fundamentals of cybersecurity including threats, vulnerabilities, and protection mechanisms.",
        thumbnailImage: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
        chapters: [{
            name: "AWS Core Services",
            description: "Explore EC2, S3, and IAM fundamentals.",
            thumbnailImage: "https://example.com/images/aws_core.jpg",
            contents: [dummyContents[0]._id, dummyContents[1]._id, dummyContents[2]._id, dummyContents[3]._id, dummyContents[5]._id, dummyContents[6]._id, dummyContents[7]._id],
            isActive: true
        },
        {
            name: "Python for Analysis",
            description: "Working with Pandas and NumPy for data analysis.",
            thumbnailImage: "https://example.com/images/python_analysis.jpg",
            contents: [dummyContents[5]._id, dummyContents[6]._id, dummyContents[7]._id, dummyContents[8]._id, dummyContents[9]._id],
            isActive: true
        }],
        price: 59.99,
        isActive: true
    },
    {
        _id: new mongoose.Types.ObjectId(),
        title: "Python for Data Science",
        description: "Dive into data science using Python. Learn about NumPy, Pandas, Matplotlib, and real-world data analysis.",
        thumbnailImage: "https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA",
        chapters: [{
            name: "DevOps Pipeline Basics",
            description: "Understanding CI/CD, Docker, and Jenkins.",
            thumbnailImage: "https://example.com/images/devops_pipeline.jpg",
            contents: [dummyContents[9]._id, dummyContents[10]._id, dummyContents[11]._id, dummyContents[12]._id, dummyContents[13]._id, dummyContents[14]._id],
            isActive: true
        }],
        price: 79.99,
        isActive: true
    }
];

const dummyCoupons = [
    {
        couponCode: 'FLAT10',
        type: 'flat',
        discount: 10,
        minOrder: 50,
        maxDiscount: 10,
        validTill: new Date('2025-12-31'),
        validFor: 'all',
        selectedCourses: []
    },
    {
        couponCode: 'NEW',
        type: 'percentage',
        discount: 50,
        minOrder: 0,
        maxDiscount: 50,
        validTill: new Date('2025-06-30'),
        validFor: 'all',
        selectedCourses: [dummyCourses[0]._id]
    }
];

const dummyUser = [
    {
        name: "Daksh Vaishnav",
        email: "daksh@gmail.com",
        password: await getHashPassword("Password@123"),
        role: "user"
    }
];

export const courseSeedData = async () => {
    try {

        await User.deleteMany();
        await User.insertMany(dummyUser);
        console.log('User inserted!');

        await Content.deleteMany();
        await Content.insertMany(dummyContents);
        console.log('Chapters inserted!');

        await Course.deleteMany();
        await Course.insertMany(dummyCourses);
        console.log('Courses inserted!');

        await Coupon.deleteMany();
        await Coupon.insertMany(dummyCoupons);
        console.log('Coupon inserted!');

    } catch (err) {
        console.error('Seeding error:', err);
    }
}

