'use client'

import {
    Container,
    Flex,
    Box,
    Text,
    Image,
    Link,
    useColorModeValue,
    Icon,
    useMediaQuery
} from '@chakra-ui/react'
import { projects } from '@/lib/utilities/data';
import { StaticImageData } from 'next/image';
import { BiLinkExternal } from 'react-icons/bi'

export default function Works() {
    const bg = useColorModeValue('white', 'gray.950')
    const cardPrimaryTextColor = useColorModeValue('gray.600', 'gray.300')
    const textColor = useColorModeValue('gray.600', 'gray.300')
    const cardTitleColor = useColorModeValue('gray.900', 'gray.300')
    const cardBgColor = useColorModeValue('white', 'gray.800')
    const tagBgColor = useColorModeValue('gray.200', 'gray.900')
    const tagHoverBgColor = useColorModeValue('gray.200', 'gray.700')
    const tagTextColor = useColorModeValue('gray.900', 'gray.200')
    const imageBgColor = useColorModeValue('gray.100', 'gray.700')
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    const staticImageToDataURL = (image: StaticImageData): string => {
        return image.src || ''
    }

    const desktopLayout = (
        <Container
            bg={bg}
            w={'100%'}
            maxW={'unset'}
        >
            <Container
                maxW={1200}
                pt={'40'}
            >
                <Flex
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    gap={4}
                >
                    <Text
                        fontWeight={'normal'}
                        fontSize={'1.1rem'}
                        color={cardPrimaryTextColor}
                    >
                        👷 Some of the things i&apos;ve worked and explored before:
                    </Text>
                </Flex>

                <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                    h={'100%'}
                    pt={10}
                    flexDirection={'column'}
                    gap={10}
                >
                    {
                        projects.map((work, index) => {
                            const workPreviewImage = work.previewImage

                            return (
                                <>
                                    <Box
                                        key={index}
                                        bg={cardBgColor}
                                        borderRadius={'2xl'}
                                        boxShadow={'2xl'}
                                        w={'full'}
                                    >
                                        <Flex>
                                            <Flex
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                                bg={imageBgColor}
                                                p={8}
                                                borderLeftRadius={'2xl'}
                                            >
                                                <Link href={work.url}>
                                                    <Image
                                                        src={
                                                            typeof workPreviewImage === 'string'
                                                                ? workPreviewImage
                                                                : staticImageToDataURL(workPreviewImage as StaticImageData)
                                                        }
                                                        alt={`${work.name} preview image`}
                                                        w={500}
                                                        h={300}
                                                        borderRadius={'2xl'}
                                                        boxShadow={'lg'}
                                                        _hover={{
                                                            transform: 'scale(1.05)'
                                                        }}
                                                        transition={'transform 0.3s ease'}
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                </Link>
                                            </Flex>
                                            <Flex
                                                flexDirection={'column'}
                                                gap={6}
                                                p={8}
                                            >
                                                <Text
                                                    fontWeight={'bold'}
                                                    color={cardTitleColor}
                                                    fontSize={'1.2rem'}
                                                >
                                                    {work.name}
                                                </Text>
                                                <Text
                                                    fontWeight={'medium'}
                                                    color={cardPrimaryTextColor}
                                                    fontSize={'1rem'}
                                                >
                                                    {work.description}
                                                </Text>
                                                <Flex
                                                    gap={2}
                                                    flexWrap={'wrap'}
                                                    maxW={'md'}
                                                >
                                                    {
                                                        work.techStacks.map((technology, index) => {
                                                            return (
                                                                <>
                                                                    <Box
                                                                        key={index}
                                                                        alignItems={'center'}
                                                                        justifyContent={'center'}
                                                                        borderRadius={'xl'}
                                                                        bg={tagBgColor}
                                                                        px={3}
                                                                        py={1}
                                                                    >
                                                                        <Text
                                                                            fontWeight={'medium'}
                                                                            color={tagTextColor}
                                                                            fontSize={'0.9rem'}
                                                                        >
                                                                            {technology}
                                                                        </Text>
                                                                    </Box>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </Flex>
                                                <Link
                                                    href={work.url}
                                                    alignSelf={'flex-start'}
                                                    borderRadius={'lg'}
                                                    _hover={{ bg: tagHoverBgColor }}
                                                    p={2}
                                                >
                                                    <Icon as={BiLinkExternal} boxSize={5} />
                                                </Link>
                                            </Flex>
                                        </Flex>
                                    </Box>
                                </>
                            )
                        })
                    }
                </Flex>
            </Container>
        </Container >
    )

    const mobileLayout = (
        <Container
            bg={bg}
            w={'100%'}
            pt={'10'}
        >
            <Flex
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                textAlign={'center'}
                gap={4}
            >
                <Text
                    fontWeight={'normal'}
                    fontSize={'1rem'}
                    color={textColor}
                >
                    👷 Some of the things i&apos;ve worked and explored before:
                </Text>
            </Flex>

            <Flex
                h={'100%'}
                pt={10}
                flexDirection={'column'}
                gap={10}
            >
                {
                    projects.map((work, index) => {
                        const workPreviewImage = work.previewImage

                        return (
                            <>
                                <Box
                                    key={index}
                                    bg={cardBgColor}
                                    borderRadius={'2xl'}
                                    boxShadow={'2xl'}
                                >
                                    <Flex
                                        flexDirection={'column'}
                                    >
                                        <Flex
                                            alignItems={'center'}
                                            justifyContent={'center'}
                                            bg={imageBgColor}
                                            p={6}
                                            borderTopRadius={'2xl'}
                                        >
                                            <Link href={work.url}>
                                                <Image
                                                    src={
                                                        typeof workPreviewImage === 'string'
                                                            ? workPreviewImage
                                                            : staticImageToDataURL(workPreviewImage as StaticImageData)
                                                    }
                                                    alt={`${work.name} preview image`}
                                                    w={'full'}
                                                    h={'auto'}
                                                    borderRadius={'2xl'}
                                                    boxShadow={'lg'}
                                                    _hover={{
                                                        transform: 'scale(1.05)'
                                                    }}
                                                    transition={'transform 0.3s ease'}
                                                    style={{ objectFit: 'cover' }}
                                                />
                                            </Link>
                                        </Flex>
                                        <Flex
                                            flexDirection={'column'}
                                            gap={6}
                                            p={6}
                                        >
                                            <Text
                                                fontWeight={'bold'}
                                                color={cardTitleColor}
                                                fontSize={'1rem'}
                                            >
                                                {work.name}
                                            </Text>
                                            <Text
                                                fontWeight={'medium'}
                                                color={cardPrimaryTextColor}
                                                fontSize={'0.9rem'}
                                            >
                                                {work.description}
                                            </Text>
                                            <Flex
                                                gap={2}
                                                flexWrap={'wrap'}
                                                maxW={'md'}
                                            >
                                                {
                                                    work.techStacks.map((technology, index) => {
                                                        return (
                                                            <>
                                                                <Box
                                                                    key={index}
                                                                    alignItems={'center'}
                                                                    justifyContent={'center'}
                                                                    borderRadius={'xl'}
                                                                    bg={tagBgColor}
                                                                    px={3}
                                                                    py={1}
                                                                >
                                                                    <Text
                                                                        fontWeight={'medium'}
                                                                        color={tagTextColor}
                                                                        fontSize={'0.7rem'}
                                                                    >
                                                                        {technology}
                                                                    </Text>
                                                                </Box>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </Flex>
                                            <Link
                                                href={work.url}
                                                alignSelf={'flex-start'}
                                                borderRadius={'lg'}
                                                _hover={{ bg: tagHoverBgColor }}
                                                p={2}
                                            >
                                                <Icon as={BiLinkExternal} boxSize={4} />
                                            </Link>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </>
                        )
                    })
                }
            </Flex>
        </Container>
    )

    return (
        <>
            {
                isLargerThan768 ? desktopLayout : mobileLayout
            }
        </>
    )
}