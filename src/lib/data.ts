import { BlogPost, Genre } from "@/types/blog";

// Data storage
export let genres: Genre[] = [
  { id: "1", name: "Poetry", slug: "poetry" },
  { id: "2", name: "Short Stories", slug: "short-stories" },
  { id: "3", name: "Essays", slug: "essays" },
  { id: "4", name: "Literary Criticism", slug: "literary-criticism" },
  { id: "5", name: "Personal", slug: "personal" }
];

export let blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Whispering Leaves",
    slug: "the-whispering-leaves",
    excerpt: "A poetic exploration of nature's subtle communication through the rustling of leaves in autumn.",
    content: `
# The Whispering Leaves

In the golden embrace of autumn, where the world transitions from vibrant greens to warm ambers and fiery reds, there exists a language few have taken the time to understand. It's the language of the whispering leaves.

## The Dance Begins

As the cool breeze weaves through the branches, leaves begin their graceful dance. They twirl and spin, creating a symphony that speaks volumes if only we would listen. Each rustle tells a story of the tree's journey through seasons, of the sunlight it has absorbed, and the rain it has tasted.

## Nature's Poetry

The whispering of leaves is nature's oldest form of poetry. It doesn't follow human constructs of rhyme or meter, but it follows the rhythm of life itself. In their gentle movements, there's a reminder of impermanence, a celebration of the present, and a promise of renewal.

> "Listen to the leaves, for they speak of time's passage and life's continuous cycle."

## Conclusion

Next time you find yourself beneath a canopy of autumn leaves, pause. Close your eyes and listen to their whispers. In their gentle rustling, you might just discover a poem written exclusively for you, carried by the wind and delivered through nature's most beautiful messengers.
    `,
    genre: genres[0],
    coverImage: "/placeholder.svg",
    isFeatured: true,
    createdAt: "2024-03-15T10:30:00Z",
    updatedAt: "2024-03-15T10:30:00Z"
  },
  {
    id: "2",
    title: "Midnight in the Garden",
    slug: "midnight-in-the-garden",
    excerpt: "A short story exploring the magical transformations that occur in a garden when the clock strikes twelve.",
    content: `
# Midnight in the Garden

The clock tower in the distance struck twelve, its deep resonance echoing across the sleeping town. Under the silvery light of the full moon, the garden transformed.

## The Awakening

Flowers that had closed their petals for the night began to unfurl, revealing luminescent centers that glowed with an ethereal blue light. The air filled with a sweet, intoxicating fragrance that seemed to whisper secrets of other worlds.

## Visitors from Beyond

Small, translucent beings with wings that caught and reflected the moonlight began to emerge from beneath leaves and flowers. They moved with purpose, collecting drops of dew that had been blessed by the midnight hour, their movements creating patterns of light that danced across the garden.

## The Observer

Hidden behind the curtains of her bedroom window, Maya watched in wonder. She had discovered this midnight phenomenon purely by chance a month ago when insomnia had driven her to look outside during the witching hour.

> "In the silence of midnight, magic doesn't hesitate to reveal itself to those willing to see."

## Conclusion

As the last chime of the clock faded into the night, Maya promised herself to return to the window the next night, and the night after that. In a world that often felt devoid of wonder, the midnight garden had become her sanctuary of magic.
    `,
    genre: genres[1],
    coverImage: "/placeholder.svg",
    isFeatured: false,
    createdAt: "2024-03-10T22:45:00Z",
    updatedAt: "2024-03-10T22:45:00Z"
  },
  {
    id: "3",
    title: "The Art of Contemplative Reading",
    slug: "the-art-of-contemplative-reading",
    excerpt: "An exploration of how slow, mindful reading can transform our relationship with literature.",
    content: `
# The Art of Contemplative Reading

In a world that prizes speed and efficiency, the practice of slow, contemplative reading has become somewhat of a lost art. Yet, it is in this deliberate slowing down that we often find the most profound connections with literature.

## Beyond Consumption

Modern reading habits often mirror our consumption patterns – quick, efficient, and focused on quantity. We "devour" books, we "go through" reading lists, we track our reading goals in numbers. But what if reading was less about consumption and more about communion?

## The Practice

Contemplative reading invites us to approach a text with reverence and curiosity. It asks us to linger on passages that move us, to sit with questions rather than rushing to answers, and to allow the text to speak to us in ways that might not be immediately apparent.

1. **Choose wisely**: Select texts that offer depth and substance.
2. **Create space**: Find a quiet, comfortable space free from distractions.
3. **Read actively**: Underline, annotate, question, and dialogue with the text.
4. **Pause and reflect**: Allow moments of silence to absorb what you've read.
5. **Re-read**: Return to passages that moved you or challenged you.

## The Rewards

This approach to reading offers rewards that extend beyond the mere acquisition of information. It fosters a deeper understanding of the text, connects us with the author's intentions, and often leads to unexpected insights about ourselves and the world.

> "To read contemplatively is to allow yourself to be read by the text."

## Conclusion

In embracing contemplative reading, we reclaim the transformative potential of literature. We move from being passive recipients to active participants in a conversation that spans time and space, connecting us with the ideas and insights of countless minds across the ages.
    `,
    genre: genres[2],
    coverImage: "/placeholder.svg",
    isFeatured: true,
    createdAt: "2024-03-05T14:20:00Z",
    updatedAt: "2024-03-06T09:15:00Z"
  },
  {
    id: "4",
    title: "The Evolution of Metaphor in Modern Poetry",
    slug: "the-evolution-of-metaphor-in-modern-poetry",
    excerpt: "An analysis of how metaphorical language has transformed in poetry over the last century.",
    content: `
# The Evolution of Metaphor in Modern Poetry

The use of metaphor in poetry has undergone significant transformation in the modern era, reflecting broader shifts in artistic sensibility, cultural context, and philosophical understanding.

## From Romanticism to Modernism

In the transition from 19th century Romantic poetry to early Modernism, we witnessed a shift from metaphors that sought to elevate nature and emotion to metaphors that fragmented and reassembled reality in new ways.

Romantic poets like Wordsworth used metaphors to draw connections between natural phenomena and human emotion, seeking to reveal the spiritual in the material. In contrast, modernists like T.S. Eliot deployed metaphors that reflected the disillusionment and fragmentation of post-war society.

## The Surrealist Influence

The surrealist movement brought yet another dimension to metaphorical language, embracing the irrational and subconscious. Poets like André Breton created startling juxtapositions that defied logical understanding but resonated on a deeper, psychological level.

## Contemporary Approaches

Contemporary poets have continued to innovate with metaphor, often blending traditional approaches with experimental techniques. There's a growing tendency to use metaphors that cross sensory boundaries, creating synesthetic experiences through language.

> "The evolution of metaphor in poetry mirrors our changing understanding of reality itself."

## Conclusion

As we trace the evolution of metaphor through modern poetry, we're not just observing changes in literary technique but witnessing the ongoing conversation between language and experience, between expression and understanding. In this evolution, poetry continues to offer us new ways of seeing and making sense of our world.
    `,
    genre: genres[3],
    coverImage: "/placeholder.svg",
    isFeatured: false,
    createdAt: "2024-02-28T08:50:00Z",
    updatedAt: "2024-02-28T08:50:00Z"
  },
  {
    id: "5",
    title: "Finding My Voice Through Poetry",
    slug: "finding-my-voice-through-poetry",
    excerpt: "A personal reflection on how writing poetry helped me discover my authentic self and navigate life's challenges.",
    content: `
# Finding My Voice Through Poetry

For as long as I can remember, I've been a collector of words. I'd gather them like seashells, examining their shapes, their sounds, their meanings. But it wasn't until I began writing poetry that I truly found my voice.

## The Silent Years

Throughout my adolescence, I often felt as if I was viewing the world from behind a pane of glass – observing, feeling, but somehow disconnected from fully expressing those observations and feelings. Words were abundant in my mind but seemed to evaporate when I tried to speak them.

## The Turning Point

It was during a particularly difficult period in my life, when grief had wrapped itself around me like a heavy cloak, that I turned to writing poetry. Not with any intention to share or publish, but simply as a way to make sense of the chaos within me.

## Liberation Through Language

What I discovered was nothing short of transformative. In the constraints of poetic form, I found freedom. In the precision required by poetry, I found clarity. In the metaphors and images that flowed from my pen, I found understanding.

> "Poetry doesn't demand perfection; it invites authenticity."

## Growing Through Words

With each poem I wrote, my voice grew stronger. I began to recognize patterns in my thinking, themes in my experiences, and connections between seemingly disparate parts of my life. Poetry became both mirror and window – reflecting who I was and offering glimpses of who I could become.

## Conclusion

The journey to finding one's voice is rarely straightforward. For me, it came through the winding path of poetry, through learning to distill complex emotions into carefully chosen words. And while I continue to evolve as both person and poet, I carry with me the profound understanding that our voices are worth finding, and once found, worth sharing.
    `,
    genre: genres[4],
    coverImage: "/placeholder.svg",
    isFeatured: true,
    createdAt: "2024-02-20T16:35:00Z",
    updatedAt: "2024-02-21T11:25:00Z"
  }
];

// Utility functions to work with our data
export function getGenres(): Genre[] {
  return genres;
}

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.isFeatured);
}

export function getBlogPostsByGenre(genreSlug: string): BlogPost[] {
  return blogPosts.filter(post => post.genre.slug === genreSlug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Functions to update data (for admin functionality)
export function updateBlogPosts(posts: BlogPost[]): void {
  blogPosts = posts;
}

export function updateGenres(newGenres: Genre[]): void {
  genres = newGenres;
  
  // Update genre references in blog posts
  blogPosts = blogPosts.map(post => {
    const genre = genres.find(g => g.id === post.genre.id);
    if (genre) {
      return { ...post, genre };
    }
    return { ...post, genre: genres[0] };
  });
}
