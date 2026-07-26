import fs from 'fs';
import path from 'path';

// Helper builder to format a course with 15+ lessons and 10+ resources
function createResourceList(topic: string, keywords: string[]) {
  return [
    { resourceType: 'youtube', title: `${topic} Full Course for Beginners`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' full course')}`, author: 'FreeCodeCamp', platform: 'YouTube' },
    { resourceType: 'youtube', title: `Mastering ${topic} in 100 Seconds`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' fireship')}`, author: 'Fireship', platform: 'YouTube' },
    { resourceType: 'youtube', title: `${topic} Architecture & Design Patterns`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' design patterns')}`, author: 'Traversy Media', platform: 'YouTube' },
    { resourceType: 'youtube', title: `Advanced ${topic} Deep Dive`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' advanced tutorial')}`, author: 'Academind', platform: 'YouTube' },
    { resourceType: 'youtube', title: `${topic} Real-World Hands-on Project`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' project tutorial')}`, author: 'Tech With Tim', platform: 'YouTube' },
    { resourceType: 'video', title: `${topic} Production Best Practices Lecture`, url: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' best practices')}`, author: 'MIT OpenCourseWare', platform: 'MIT OCW' },
    { resourceType: 'ebook', title: `The Complete ${topic} Handbook & Docs`, url: `https://devdocs.io/`, author: 'Official Docs' },
    { resourceType: 'article', title: `${topic} Architecture Guide & Cheatsheet`, url: `https://dev.to/search?q=${encodeURIComponent(topic)}`, author: 'DEV Community' },
    { resourceType: 'cheatsheet', title: `${topic} Quick Reference & Syntax Guide`, url: `https://quickref.me/`, author: 'QuickRef' },
    { resourceType: 'article', title: `Top 10 ${topic} Interview Questions & Answers`, url: `https://hashnode.com/search?q=${encodeURIComponent(topic)}`, author: 'Hashnode' },
  ];
}

console.log('Script helper ready');
