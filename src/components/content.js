import React from 'react';
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';

const Content = () => {
  return (
    <Box py={10}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src="https://www.bing.com/images/search?view=detailV2&ccid=3T%2fBnH%2fR&id=116DB41B65A3916F49DE94D2319B80444F2D452C&thid=OIP.3T_BnH_Rzyf3eJq7yMtM5AHaIj&mediaurl=https%3a%2f%2fcimages1.touristlink.com%2frepository%2f2015%2f12%2fTHE%2fKAN%2fGLA%2fGAT%2fE8Z%2fGC8%2fHOD%2fkangla-palace-the-_-gate.jpg&exph=693&expw=600&q=imphal+kangla&simid=607989540827566451&FORM=IRPRST&ck=4434ECC8A904BD7A410CBBD5B7D16EA9&selectedIndex=13&ajaxhist=0&ajaxserp=0"
            alt="IMPHAL"
          />
          <Stack p={4}>
            <Box>
              <Heading size="md">The perfect latte</Heading>
              <Text py={2}>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Box>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </Stack>
        </Box>
        {/* Repeat the above box component two more times */}
        {/* Add your own content and customize as needed */}
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src="https://www.bing.com/images/search?view=detailV2&mediaurl=https%3A%2F%2Fjooinn.com%2Fimages%2Findia-gate-3.jpg&expw=3696&exph=2448&cbid=AEDrg7trCeOF27A480x360&cbn=local&idpp=local&ypid=YN4070x6963796856699759854&usebfpr=0&eeptype=PhotoGroups&datagroup=local:datagroup.photos&photogroupname=AllPhotos&pagetag=AllPhotos&selectedindex=5&id=AEDrg7trCeOF27A480x360&q=INDIA%20gate\&pseg=Local&form=LOCIMG&ajaxhist=0&ajaxserp=0&vt=0&sim=11"
            alt="DELHI"
          />
          <Stack p={4}>
            <Box>
              <Heading size="md">The perfect latte</Heading>
              <Text py={2}>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Box>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </Stack>
        </Box>
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          boxShadow="md"
          variant="outline"
        >
          <Image
            objectFit="cover"
            maxW={{ base: '100%', sm: '200px' }}
            src="https://www.bing.com/images/search?view=detailV2&ccid=r3FFdVI2&id=5B1FC837450EFC4CDB3F1DCA66BA350435C4F731&thid=OIP.r3FFdVI2LFsdAg3VoqnBqwHaE8&mediaurl=https%3a%2f%2flp-cms-production.imgix.net%2f2019-06%2f9483508eeee2b78a7356a15ed9c337a1-bengaluru-bangalore.jpg%3ffit%3dcrop%26q%3d40%26sharp%3d10%26vib%3d20%26auto%3dformat%26ixlib%3dreact-8.6.4&exph=2000&expw=3000&q=bangalore&simid=608053394079185976&FORM=IRPRST&ck=72D57BA44AAFB6599BB585D9CD8F51F7&selectedIndex=5&ajaxhist=0&ajaxserp=0"
            alt="BANGALORE"
          />
          <Stack p={4}>
            <Box>
              <Heading size="md">The perfect latte</Heading>
              <Text py={2}>
                Caffè latte is a coffee beverage of Italian origin made with
                espresso and steamed milk.
              </Text>
            </Box>
            <Button variant="solid" colorScheme="blue">
              Buy Latte
            </Button>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Content;
