import Image from 'next/image'
import { Flex, Text, Button, Section, Heading, Code, Container, Box, Grid } from '@radix-ui/themes'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function StyleComponentGuide() {
  return (
    <>
      <Box p='5'>
        <Heading size={8}>Container</Heading>
        <Text size={4}>Constrains the maximum width of page content.</Text>
      </Box>

      <Flex direction='column' gap='2'>
        <Box py='2' style={{ background: 'var(--gray-2)', borderRadius: 'var(--radius-3)' }}>
          <Container size='1'>
            <Box p='4' style={{ background: 'var(--gray-5)', borderRadius: 'var(--radius-3)' }}>
              <Text size={3}>Size 1</Text>
            </Box>
          </Container>
        </Box>
        <Box py='2' style={{ background: 'var(--gray-2)', borderRadius: 'var(--radius-3)' }}>
          <Container size='2'>
            <Box p='4' style={{ background: 'var(--gray-5)', borderRadius: 'var(--radius-3)' }}>
              <Text size={3}>Size 2</Text>
            </Box>
          </Container>
        </Box>
        <Box py='2' style={{ background: 'var(--gray-2)', borderRadius: 'var(--radius-3)' }}>
          <Container size='3'>
            <Box p='4' style={{ background: 'var(--gray-5)', borderRadius: 'var(--radius-3)' }}>
              <Text size={3}>Size 3</Text>
            </Box>
          </Container>
        </Box>
        <Box py='2' style={{ background: 'var(--gray-2)', borderRadius: 'var(--radius-3)' }}>
          <Container size='4'>
            <Box p='4' style={{ background: 'var(--gray-5)', borderRadius: 'var(--radius-3)' }}>
              <Text size={3}>Size 4</Text>
            </Box>
          </Container>
        </Box>
      </Flex>

      <Container size='4'>
        <Grid
          columns='repeat(12, minmax(0, 1fr))'
          gap='1'          
          rows='repeat(6, minmax(0, 1fr))'
          width='auto'
        >
          <Flex gridColumn='1/span 2'>
            <Text>Backgrounds</Text>
            <Box style={{height: "1px", backgroundImage: 'linear-gradient(to right, transparent, var(--gray-a8) 30%, var(--gray-a8) 70%, transparent)'}}></Box>
          </Flex>
          <Flex gridColumn='3/span 3'>
            <Text>Interactive Components</Text>
            <Box></Box>
          </Flex>
          <Flex gridColumn='6/span 3'>
            <Text>Borders and separators</Text>
            <Box></Box>
          </Flex>
          <Flex gridColumn='9/span 2'>
            <Text>Solid Colors</Text>
            <Box></Box>
          </Flex>
          <Flex gridColumn='11/span 2'>
            <Text>Accessible text</Text>
            <Box></Box>
          </Flex>
          {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
            <Flex key={`swatch-index-{i}`} justify='center' align='center'>
              {i}
            </Flex>
          ))}
          {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
            <Box key={`blue-swatch-{i}`} style={{ backgroundColor: `var(--blue-${i})` }}></Box>
          ))}
          {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
            <Box key={`green-swatch-{i}`} style={{ backgroundColor: `var(--green-${i})` }}></Box>
          ))}
          {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
            <Box key={`teal-swatch-{i}`} style={{ backgroundColor: `var(--teal-${i})` }}></Box>
          ))}
          {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
            <Box key={`gray-swatch-{i}`} style={{ backgroundColor: `var(--gray-${i})` }}></Box>
          ))}
        </Grid>
      </Container>

      <Flex direction='column' gap='3'>
        <Flex gap='3' align='center'>
          <Button variant='classic'>
            Get started <ArrowRightIcon />
          </Button>
          <Button variant='solid'>
            Get started <ArrowRightIcon />
          </Button>
          <Button variant='soft'>
            Get started <ArrowRightIcon />
          </Button>
        </Flex>
        <Flex direction='column' gap='3'>
          <Heading size='1'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='2'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='3'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='4'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='5'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='6'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='7'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='8'>The quick brown fox jumps over the lazy dog</Heading>
          <Heading size='9'>The quick brown fox jumps over the lazy dog</Heading>
          <Code>
            <Heading size='1'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='2'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='3'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='4'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='5'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='6'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='7'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='8'>The quick brown fox jumps over the lazy dog</Heading>
            <Heading size='9'>The quick brown fox jumps over the lazy dog</Heading>
          </Code>
        </Flex>
      </Flex>
    </>
  )
}
