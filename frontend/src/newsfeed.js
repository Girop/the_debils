import * as React from 'react';
import { useEffect } from 'react';

const lorem_short = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum orci justo, sed scelerisque enim convallis et. Fusce facilisis scelerisque metus id consectetur. Integer eleifend magna vitae hendrerit gravida. Curabitur tincidunt ipsum faucibus, rutrum neque ut, congue ex. Cras vel ex viverra, iaculis augue egestas, volutpat diam. Cras vel ex eget est tincidunt tincidunt eu in nisl. Nam eget iaculis dolor. Donec et ultrices elit. Nulla dignissim tincidunt porttitor. `;

const lorem_medium = ` 
# Paragraph 1
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum orci justo, sed scelerisque enim convallis et. Fusce facilisis scelerisque metus id consectetur. Integer eleifend magna vitae hendrerit gravida. Curabitur tincidunt ipsum faucibus, rutrum neque ut, congue ex. Cras vel ex viverra, iaculis augue egestas, volutpat diam. Cras vel ex eget est tincidunt tincidunt eu in nisl. Nam eget iaculis dolor. Donec et ultrices elit. Nulla dignissim tincidunt porttitor.
# Paragraph 2
Praesent nec erat rutrum diam fermentum auctor. Morbi egestas magna quis eros ultricies imperdiet. Nam nunc ipsum, dapibus vitae auctor a, blandit elementum magna. Proin et tincidunt mi. Phasellus at mattis neque, ac placerat turpis. Nunc fermentum porttitor mi quis bibendum. Nulla eget libero eu erat hendrerit lobortis eget aliquam metus. Pellentesque blandit lectus sed enim scelerisque condimentum. Mauris hendrerit diam a lectus pellentesque, pretium interdum lectus iaculis.
# Paragraph 3
Sed non tempus eros. Donec vehicula, augue et pretium dapibus, arcu erat luctus purus, accumsan ullamcorper dui arcu sed massa. Aliquam ornare mi in mi tincidunt imperdiet. Aenean lacinia tellus eu tortor placerat, et venenatis orci accumsan. Donec lacinia consectetur augue nec sagittis. Praesent quis elit rhoncus mauris vestibulum aliquam tincidunt et metus. Nulla ut ex molestie, interdum lectus condimentum, faucibus dolor. Nulla pulvinar est leo, at convallis justo scelerisque id. Etiam faucibus orci id placerat vehicula. Etiam elementum ultrices velit, ut semper sem. 
`;

const lorem_long = `
# Paragraph 1  
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum orci justo, sed scelerisque enim convallis et. Fusce facilisis scelerisque metus id consectetur. Integer eleifend magna vitae hendrerit gravida. Curabitur tincidunt ipsum faucibus, rutrum neque ut, congue ex. Cras vel ex viverra, iaculis augue egestas, volutpat diam. Cras vel ex eget est tincidunt tincidunt eu in nisl. Nam eget iaculis dolor. Donec et ultrices elit. Nulla dignissim tincidunt porttitor.
Praesent nec erat rutrum diam fermentum auctor. Morbi egestas magna quis eros ultricies imperdiet. Nam nunc ipsum, dapibus vitae auctor a, blandit elementum magna. Proin et tincidunt mi. Phasellus at mattis neque, ac placerat turpis. Nunc fermentum porttitor mi quis bibendum. Nulla eget libero eu erat hendrerit lobortis eget aliquam metus. Pellentesque blandit lectus sed enim scelerisque condimentum. Mauris hendrerit diam a lectus pellentesque, pretium interdum lectus iaculis.
Sed non tempus eros. Donec vehicula, augue et pretium dapibus, arcu erat luctus purus, accumsan ullamcorper dui arcu sed massa. Aliquam ornare mi in mi tincidunt imperdiet. Aenean lacinia tellus eu tortor placerat, et venenatis orci accumsan. Donec lacinia consectetur augue nec sagittis. Praesent quis elit rhoncus mauris vestibulum aliquam tincidunt et metus. Nulla ut ex molestie, interdum lectus condimentum, faucibus dolor. Nulla pulvinar est leo, at convallis justo scelerisque id. Etiam faucibus orci id placerat vehicula. Etiam elementum ultrices velit, ut semper sem.
Morbi at sem sit amet lectus ultricies facilisis. Vestibulum cursus nisi a ultricies sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus ultrices enim sem, ac mollis diam laoreet at. Etiam ut ante et metus rhoncus vestibulum. Vivamus posuere massa nec purus cursus semper. Curabitur pellentesque id magna varius laoreet. Nam vel augue sed orci scelerisque placerat ut ultricies massa. Pellentesque egestas eleifend vestibulum. Etiam a feugiat mi, vel eleifend est. Integer ultrices efficitur dui, vitae lobortis elit auctor vitae. Mauris venenatis finibus lectus nec tincidunt. Pellentesque tortor ante, consectetur ut vehicula vitae, bibendum a sapien. Donec tempor bibendum metus. Curabitur pretium libero urna, egestas pretium diam laoreet vitae.
Sed non iaculis erat. Duis id purus egestas, aliquet massa in, eleifend dolor. Ut at urna vitae purus tempus faucibus. Vestibulum luctus tellus ut consectetur ornare. Phasellus aliquet convallis est, eu viverra ipsum pellentesque vitae. Vivamus mollis sagittis posuere. Cras aliquet euismod mi non semper. Maecenas pretium leo sit amet mattis luctus. Maecenas porta nec libero non lacinia. Aliquam mollis velit orci, finibus varius purus tempus ac. Aliquam tortor dolor, lacinia et auctor ut, dictum et nibh. Ut volutpat arcu erat, ut posuere nunc congue ac. Proin luctus odio justo, eleifend tincidunt justo suscipit elementum. Aliquam aliquam luctus neque in volutpat. Sed mollis tempor risus sit amet interdum.  

# Paragraph 2
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac ante mi. Etiam quis ultrices odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit elit, gravida ac ullamcorper in, sodales non justo. Vivamus faucibus fermentum ante at placerat. Nulla eget quam eget ipsum venenatis pellentesque sed nec purus. Vestibulum porttitor ante mauris, vitae elementum mi rhoncus vel. Donec finibus lectus sit amet sem viverra, nec tempor eros pellentesque. Curabitur accumsan vel ipsum quis consequat. Donec euismod facilisis neque et tristique. Ut non auctor urna. Quisque sagittis rhoncus dui eget ullamcorper. Nunc pellentesque congue risus, blandit semper velit mollis eget.
Mauris faucibus sapien a blandit pulvinar. Pellentesque bibendum metus risus, non maximus nunc posuere eu. Praesent vel urna nisl. Nam et consectetur ipsum. Suspendisse pulvinar lorem quis auctor facilisis. Ut eget mi dapibus, posuere nibh eget, pretium sapien. Praesent posuere viverra enim, id tempus dui blandit a. Sed ultrices rutrum nunc et aliquam. Mauris eleifend dui nec sem tincidunt, non elementum nulla ultricies. Pellentesque suscipit libero sit amet odio fringilla, ac tincidunt erat ornare. Suspendisse varius ante lacus, et vulputate turpis pretium et. Ut mauris lorem, aliquet ac justo vitae, convallis sollicitudin nisl. Curabitur vel enim commodo, laoreet leo non, commodo nulla. Quisque scelerisque porta nulla sed congue. Quisque a euismod risus.
Etiam pellentesque tellus vitae consectetur euismod. Phasellus purus lacus, malesuada at nibh quis, tincidunt faucibus turpis. Nullam maximus odio et felis volutpat dignissim. Sed gravida rutrum volutpat. Aliquam sapien eros, condimentum ac lacinia sed, feugiat quis urna. Praesent quam urna, egestas sit amet porttitor non, iaculis quis nisi. Suspendisse tincidunt purus et elit pellentesque, nec viverra libero malesuada. Nunc ipsum ex, faucibus non mauris nec, posuere interdum est. Nullam vitae facilisis ex. Integer viverra dui urna, quis gravida ante mattis non. Nulla sit amet lobortis lectus. Curabitur at eros posuere, imperdiet urna vel, euismod nulla. Curabitur ut hendrerit tortor. Proin interdum efficitur ultrices. Integer malesuada quis arcu posuere varius.
Suspendisse malesuada metus eu felis ultrices, ac hendrerit nulla elementum. Integer ultricies dui eget lorem volutpat, ac pretium magna egestas. Suspendisse odio lectus, dapibus at tincidunt id, pulvinar vel justo. Phasellus sem felis, maximus sit amet massa ac, condimentum convallis nulla. Nulla quis libero velit. Sed ut lectus sit amet odio mattis ultrices. Pellentesque interdum, nunc tristique euismod interdum, dolor lacus vehicula diam, quis egestas nibh odio eget ligula. Mauris dictum velit eget mauris porta, vitae porttitor libero sodales.
Sed ac tellus ac nulla pretium rhoncus. Nullam justo turpis, elementum eget orci nec, suscipit lacinia quam. Pellentesque eget congue dui. Sed diam tellus, ultrices eu lobortis a, placerat a risus. Vivamus congue consectetur neque, eu cursus dui maximus accumsan. Proin vitae nisl vitae quam rutrum volutpat. Phasellus malesuada risus sit amet lectus vehicula, in pretium ex fringilla. Aliquam felis ex, rhoncus varius elit vulputate, ullamcorper iaculis mauris.

# Paragraph 3
Suspendisse eu tempor leo. Maecenas suscipit sit amet lacus in varius. Praesent eget dapibus nisi. Pellentesque eu mattis dolor. Integer id ullamcorper magna, sed fermentum felis. Mauris in odio vitae odio pulvinar accumsan fermentum id ante. Donec eget lectus sit amet leo pellentesque finibus quis eu massa.
Curabitur sit amet tincidunt velit. Donec ultricies diam sed pellentesque tempus. Quisque consequat varius diam a scelerisque. Sed suscipit elit tortor, quis mattis elit ornare at. Mauris blandit vitae massa eu eleifend. Proin mollis nulla ut metus imperdiet, in tincidunt nisi sodales. Mauris et mattis arcu.
Quisque quis accumsan elit. Pellentesque pulvinar erat vel lorem faucibus tempus. Duis sit amet felis odio. Morbi id efficitur erat, auctor scelerisque arcu. Quisque vulputate iaculis odio ullamcorper consequat. Integer nec arcu consectetur, fringilla justo eget, fermentum erat. Donec nec laoreet felis. Suspendisse potenti. Duis eu eros eleifend neque porttitor aliquet ac ac mi. In ac orci nec justo vestibulum imperdiet. Suspendisse at metus urna. Mauris ac lectus in risus mollis ultrices id sed elit. Mauris luctus neque sed risus euismod, sed rhoncus orci tristique.
Donec accumsan a nulla auctor semper. Ut ac purus dui. Cras non enim molestie, tincidunt metus sed, vehicula est. Suspendisse porta, mi ac blandit interdum, est est porttitor justo, a finibus nunc elit vestibulum arcu. Proin ac auctor magna, vel ultrices nisi. Nulla sagittis tortor ut sem commodo vestibulum. Quisque tincidunt, neque eu euismod fringilla, mauris quam tempor neque, vel ultrices elit dolor eget nibh. In sit amet nulla consectetur, ultricies lorem id, suscipit erat.
Suspendisse potenti. In hac habitasse platea dictumst. Mauris eu sem auctor, pharetra tortor ac, consectetur mauris. Etiam efficitur eros magna, ac ultrices libero viverra in. Maecenas porta a lorem ut placerat. Maecenas in tincidunt metus, egestas eleifend ex. Nunc et eros tempor, ornare erat a, auctor sem. Duis eu velit ac est consequat molestie. In vel ultrices metus. Sed consequat sapien id mi maximus tempor.
Aliquam ex sapien, facilisis ac eros eu, commodo semper massa. Praesent porta egestas augue et placerat. Suspendisse luctus auctor venenatis. Fusce eu neque et felis posuere vulputate a at sapien. Mauris condimentum, urna vel cursus finibus, ante magna placerat magna, a suscipit orci nisl ac nisi. Aliquam erat volutpat. In lobortis pharetra est, eget condimentum nibh volutpat vel.
Sed dignissim dui a leo dignissim, sed imperdiet ipsum congue. Morbi nec consectetur urna, eu placerat nunc. In sem libero, sagittis et ornare at, eleifend non nisi. Sed interdum eleifend lacus. Nulla semper purus odio, ac scelerisque libero tristique ut. Nam sem augue, varius a feugiat in, rutrum non tellus. Aenean laoreet vulputate lectus id consequat. Morbi et condimentum neque. Integer ut tempus dolor. Quisque a faucibus magna, sit amet mattis risus. Sed vestibulum sit amet ex id vehicula. Integer finibus neque non sem pellentesque lobortis. Vestibulum porttitor eu nibh id fermentum. Suspendisse ultricies luctus egestas. Maecenas ultrices venenatis odio a varius. Sed consequat neque erat, vitae porttitor lectus congue fringilla.

# Paragraph 4
In scelerisque leo id magna tempor luctus in ut ligula. Aliquam erat volutpat. Etiam maximus mattis elit in ornare. Nam quis erat tristique velit laoreet tincidunt. Sed suscipit ipsum lacinia interdum venenatis. Duis non nibh finibus nisi egestas rhoncus in eu purus. Quisque hendrerit magna convallis lectus pretium finibus. Pellentesque a nibh vitae neque vehicula varius.
Integer ornare a quam eget ullamcorper. Donec felis ligula, dignissim sit amet euismod at, sodales et orci. Duis et diam nulla. Donec vestibulum augue id libero lacinia ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec velit elit, laoreet a rutrum sit amet, tincidunt sed nulla. Sed ac sapien viverra, vulputate augue ut, semper ante. Aenean sit amet euismod orci.
Sed pulvinar dolor libero, non auctor enim elementum in. Nam vitae tincidunt lorem, et varius arcu. Duis magna nibh, faucibus quis nulla nec, consequat malesuada tortor. Nunc quis ante blandit, sagittis massa nec, porta ipsum. Sed vel lorem in turpis condimentum elementum. Cras condimentum turpis urna, a semper libero viverra consequat. Pellentesque maximus consectetur ornare. Fusce lacinia erat non lectus vestibulum, sed hendrerit ipsum hendrerit. Pellentesque a posuere dolor, ut interdum tellus. Vivamus a arcu eget ex aliquam facilisis.
Donec sed tincidunt sapien. Integer urna elit, rhoncus non lobortis in, pharetra vel enim. Aliquam non faucibus sapien, eu scelerisque mauris. Aenean tristique mi augue, non consectetur nibh rutrum sit amet. Vestibulum maximus vitae nisi nec pretium. Fusce nec odio nec odio blandit pharetra. Curabitur vitae nunc laoreet, gravida eros auctor, ornare elit. Sed vehicula tempus erat quis lacinia. In ullamcorper mi diam, eu viverra felis fermentum nec. Donec ac metus at eros pretium dapibus. Phasellus a tortor sit amet elit varius porttitor. Donec eu vulputate nulla. Praesent vel convallis mauris. Mauris pharetra id tellus consectetur hendrerit.
Curabitur metus felis, maximus ac pulvinar non, ullamcorper ac tortor. In gravida mattis pellentesque. Ut vehicula volutpat sodales. Sed a odio vitae quam sollicitudin facilisis. Duis semper ullamcorper condimentum. Mauris in consequat metus, vitae dapibus dui. Morbi vitae erat vitae nisi molestie imperdiet et non nisi. Donec auctor ultricies mi, et pretium enim interdum a. Aliquam interdum mauris quis tortor luctus, quis sagittis justo varius. Donec laoreet enim at fermentum volutpat. Quisque efficitur orci non ante faucibus tempus. Nullam neque nulla, accumsan pulvinar vulputate at, imperdiet sit amet turpis. Ut lobortis metus eu metus feugiat posuere. Mauris bibendum lacinia dui a pellentesque. Phasellus sed nibh egestas, consectetur enim at, ullamcorper velit.
Donec a luctus tortor. Mauris accumsan ex tellus, at pellentesque quam dapibus id. Praesent sit amet blandit purus, in ornare velit. Nulla porta, ex id semper ultrices, nulla lorem facilisis augue, id faucibus ex ex eget turpis. Duis eu dolor magna. In aliquam malesuada tristique. Nullam rhoncus ullamcorper erat at suscipit. Praesent volutpat vulputate posuere. Etiam et interdum dui, ac iaculis nisl. Nullam bibendum risus vel vulputate volutpat. Sed vitae tortor nec urna varius viverra in eget leo. Donec dui lacus, volutpat sed accumsan sit amet, luctus et ante. Proin mattis sagittis felis, nec rutrum augue congue eu. Pellentesque sed feugiat nulla. Morbi eleifend finibus semper. Pellentesque feugiat eros vel ante viverra vestibulum.
Quisque blandit scelerisque quam, vestibulum tincidunt lorem sodales eget. Nam congue felis at massa rutrum, interdum congue dui efficitur. Sed congue, nunc vitae facilisis finibus, neque massa pretium sapien, vel cursus dui metus bibendum risus. Aenean eu aliquet turpis, id maximus augue. Phasellus ac dui non magna egestas tempus eget eget tortor. In lacinia volutpat enim, sed gravida erat ultricies at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla a sapien sit amet justo mattis pharetra. Nullam arcu augue, ultrices vestibulum varius at, elementum sed nulla. Aliquam sit amet vehicula lacus. Fusce in ex nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean venenatis, nunc eu vehicula placerat, felis dui scelerisque eros, at consectetur enim ligula a felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque vehicula vitae magna vel imperdiet. Nam vulputate at quam in tempus.
Nulla finibus, lectus tincidunt posuere feugiat, nisl tortor hendrerit risus, quis tempor mi velit quis odio. Aenean mollis magna eu lacus lacinia, eu fringilla lacus sodales. Vestibulum sit amet arcu in lacus tempus varius. Duis faucibus tellus nec condimentum malesuada. Fusce dolor est, venenatis vel nunc nec, pretium finibus erat. Nam eleifend eleifend libero sit amet fermentum. Sed pharetra ornare nunc at congue. Donec et erat ac lorem accumsan pulvinar ac quis metus. Etiam tempor rutrum luctus. 
`;


const newsData = [
    {
        name: "Fest wiejski przy kościele",
        date: new Date(),
        content: lorem_short,
    },
    {
        name: "Wolontariat w oczyszczaniu lasów",
        date: new Date(),
        content: lorem_medium
    },
    {
        name: "Zbiórka odpadów wielkogabarytowych",
        date: new Date(),
        content: lorem_long,
    },
];

export default function Newsfeed() { 
    const [posts, setPosts] = React.useState([]);

    useEffect(() => {
        // fetch(); TODO
        setPosts(newsData);
    }, []);

    return (
    <ul>
        {posts.map(post => (
            <li key={post.name}> 
                <p> {post.name} </p>
                <p> {post.date.getDate()} </p>
                <p> {post.content} </p>
            </li>
        ))}
    </ul>
    )
        
}
