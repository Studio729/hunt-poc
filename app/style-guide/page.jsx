import Image from "next/image";
import { Flex, Text, Button, Section, Heading, Code, Container, Box, Grid, Spinner, TextField, IconButton, Select } from "@radix-ui/themes";
import { ArrowRightIcon, BookmarkIcon, DotsHorizontalIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Fragment } from "react";

export default function StyleComponentGuide() {
  return (
    <>
      <Section>
        <Box p="5">
          <Heading size="8">Container</Heading>
          <Text size="4">Constrains the maximum width of page content.</Text>
        </Box>

        <Flex direction="column" gap="2">
          <Box py="2" style={{ background: "var(--gray-2)", borderRadius: "var(--radius-3)" }}>
            <Container size="1">
              <Box p="4" style={{ background: "var(--gray-5)", borderRadius: "var(--radius-3)" }}>
                <Text size={3}>Size 1</Text>
              </Box>
            </Container>
          </Box>
          <Box py="2" style={{ background: "var(--gray-2)", borderRadius: "var(--radius-3)" }}>
            <Container size="2">
              <Box p="4" style={{ background: "var(--gray-5)", borderRadius: "var(--radius-3)" }}>
                <Text size={3}>Size 2</Text>
              </Box>
            </Container>
          </Box>
          <Box py="2" style={{ background: "var(--gray-2)", borderRadius: "var(--radius-3)" }}>
            <Container size="3">
              <Box p="4" style={{ background: "var(--gray-5)", borderRadius: "var(--radius-3)" }}>
                <Text size={3}>Size 3</Text>
              </Box>
            </Container>
          </Box>
          <Box py="2" style={{ background: "var(--gray-2)", borderRadius: "var(--radius-3)" }}>
            <Container size="4">
              <Box p="4" style={{ background: "var(--gray-5)", borderRadius: "var(--radius-3)" }}>
                <Text size={3}>Size 4</Text>
              </Box>
            </Container>
          </Box>
        </Flex>
      </Section>

      <Section>
        <Box p="5">
          <Heading size="8">Colors</Heading>
        </Box>

        <Container size="4">
          <Grid columns="repeat(12, minmax(0, 1fr))" gap="1" rows="0.75fr 0.5fr 1fr 1fr 1fr 1fr" width="auto">
            <Flex direction="column" align="center" gap="2" gridColumn="1/span 2">
              <Text>Backgrounds</Text>
              <Box style={{ height: "1px", width: "100%", backgroundImage: `linear-gradient(to right, transparent, var(--gray-a8) 30%, var(--gray-a8) 70%, transparent)` }}></Box>
            </Flex>
            <Flex direction="column" align="center" gap="2" gridColumn="3/span 3">
              <Text>Interactive Components</Text>
              <Box style={{ height: "1px", width: "100%", backgroundImage: `linear-gradient(to right, transparent, var(--gray-a8) 30%, var(--gray-a8) 70%, transparent)` }}></Box>
            </Flex>
            <Flex direction="column" align="center" gap="2" gridColumn="6/span 3">
              <Text>Borders and separators</Text>
              <Box style={{ height: "1px", width: "100%", backgroundImage: `linear-gradient(to right, transparent, var(--gray-a8) 30%, var(--gray-a8) 70%, transparent)` }}></Box>
            </Flex>
            <Flex direction="column" align="center" gap="2" gridColumn="9/span 2">
              <Text>Solid Colors</Text>
              <Box style={{ height: "1px", width: "100%", backgroundImage: `linear-gradient(to right, transparent, var(--gray-a8) 30%, var(--gray-a8) 70%, transparent)` }}></Box>
            </Flex>
            <Flex direction="column" align="center" gap="2" gridColumn="11/span 2">
              <Text>Accessible text</Text>
              <Box style={{ height: "1px", width: "100%", backgroundImage: `linear-gradient(to right, transparent, var(--gray-a8) 30%, var(--gray-a8) 70%, transparent)` }}></Box>
            </Flex>
            {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
              <Flex key={`swatch-index-${i}`} justify="center" align="center" direction="column">
                {i}
              </Flex>
            ))}
            {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
              <Box key={`blue-swatch-${i}`} style={{ height: "50px", backgroundColor: `var(--blue-${i})` }}></Box>
            ))}
            {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
              <Box key={`green-swatch-${i}`} style={{ height: "50px", backgroundColor: `var(--green-${i})` }}></Box>
            ))}
            {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
              <Box key={`teal-swatch-${i}`} style={{ height: "50px", backgroundColor: `var(--teal-${i})` }}></Box>
            ))}
            {Array.from({ length: 12 }, (v, i) => i + 1).map((i) => (
              <Box key={`gray-swatch-${i}`} style={{ height: "50px", backgroundColor: `var(--gray-${i})` }}></Box>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Box p="5">
          <Heading size="8">Heading</Heading>
          <Text size="4">Semantic heading element.</Text>
        </Box>
        {/* <Container size="4"> */}
        <Flex direction="column" gap="4" p="5">
          {Array.from({ length: 9 }, (v, i) => i + 1).map((i) => (
            <Flex key={`heading-sample-${i}`} gap="4" align="center">
              <Flex height="50px" width="50px" justify="center" align="center" style={{ backgroundColor: "var(--gray-6)", borderRadius: "var(--radius-4)" }}>
                H{i}
              </Flex>
              <Flex align="center" width="100%">
                <Heading size={`${i}`}>The quick brown fox jumps over the lazy dog</Heading>
              </Flex>
            </Flex>
          ))}
        </Flex>
        {/* </Container> */}
      </Section>

      <Section px="5">
        <Box py="5">
          <Heading size="8">Button</Heading>
          <Text size={4}>Trigger an action or event, such as submitting a form or displaying a dialog.</Text>
        </Box>

        <Heading size="6">Size</Heading>
        <Grid rows="0.5fr 1fr 1fr 1fr 1fr" columns="auto" flow="column" gap="4" py="4">
          {Array.from({ length: 4 }, (v, i) => i + 1).map((i) => (
            <Fragment key={`button-size-${i}`}>
              <Flex justify="center">
                <Text>Size: {i}</Text>
              </Flex>
              <Flex align="center" width="100%">
                <Button size={`${i}`}>Button Text</Button>
              </Flex>
              <Flex align="center" width="100%">
                <Button size={`${i}`} color="blue">
                  Button Text
                </Button>
              </Flex>
              <Flex align="center" width="100%">
                <Button size={`${i}`} color="teal">
                  Button Text
                </Button>
              </Flex>
              <Flex align="center" width="100%">
                <Button size={`${i}`} color="gray">
                  Button Text
                </Button>
              </Flex>
            </Fragment>
          ))}
        </Grid>

        <Box pt="8">
          <Heading size="6">Variant / High Contrast</Heading>
          <Grid rows="0.5fr 1fr 1fr 1fr 1fr" columns="auto" flow="column" gap="4" py="4">
            {["classic", "solid", "soft", "surface", "outline", "ghost"].map((i) => (
              <Fragment key={`button-variant-${i}`}>
                <Flex justify="center">
                  <Text>{i}</Text>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`}>
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`} highContrast>
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`} color="blue">
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`} color="blue" highContrast>
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`} color="teal">
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`} color="teal" highContrast>
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`} color="gray">
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                  <Flex align="center" justify="center" height="35px">
                    <Button variant={`${i}`} color="gray" highContrast>
                      <BookmarkIcon /> Button Text
                    </Button>
                  </Flex>
                </Flex>
              </Fragment>
            ))}
          </Grid>
        </Box>

        <Box pt="8">
          <Heading size="6">Spinner</Heading>
          <Grid rows="0.5fr 1fr 1fr 1fr 1fr" columns="auto" flow="column" gap="4" py="4">
            {["classic", "solid", "soft", "surface", "outline"].map((i) => (
              <Fragment key={`button-spinner-${i}`}>
                <Flex justify="center">
                  <Text>{i}</Text>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Button variant={`${i}`}>
                    <Spinner loading>
                      <BookmarkIcon />
                    </Spinner>
                    Button Text
                  </Button>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Button variant={`${i}`} color="blue">
                    <Spinner loading>
                      <BookmarkIcon />
                    </Spinner>
                    Button Text
                  </Button>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Button variant={`${i}`} color="teal">
                    <Spinner loading>
                      <BookmarkIcon />
                    </Spinner>
                    Button Text
                  </Button>
                </Flex>
                <Flex align="center" direction="column" gap="2" width="100%">
                  <Button variant={`${i}`} color="gray">
                    <Spinner loading>
                      <BookmarkIcon />
                    </Spinner>
                    Button Text
                  </Button>
                </Flex>
              </Fragment>
            ))}
          </Grid>
        </Box>
        {/* </Container> */}
      </Section>

      <Section px="5">
        <Box py="5">
          <Heading size="8">Text Field</Heading>
          <Text size={4}>Captures user input with an optional slot for buttons and icons.</Text>
        </Box>

        <Grid columns="3" rows="auto">
          <Box>
            <Heading size="5">Size</Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {Array.from({ length: 3 }, (v, i) => i + 1).map((i) => (
                <Fragment key={`textfields-size-${i}`}>
                  <Flex align="center">
                    <Text>Size: {i}</Text>
                  </Flex>
                  <Flex align="center">
                    <TextField.Root size={`${i}`} placeholder="Company Name" />
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              With Icons
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {Array.from({ length: 3 }, (v, i) => i + 1).map((i) => (
                <Fragment key={`textfield-icons-${i}`}>
                  <Flex align="center">
                    <Text>Size: {i}</Text>
                  </Flex>
                  <Flex align="center">
                    <TextField.Root size={`${i}`} placeholder="Company Name">
                      <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                      </TextField.Slot>
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost">
                          <DotsHorizontalIcon height="14" width="14" />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              Variant
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {["classic", "surface", "soft"].map((i) => (
                <Fragment key={`textfield-variant-${i}`}>
                  <Flex align="center">
                    <Text>{i}</Text>
                  </Flex>
                  <Flex align="center">
                    <TextField.Root variant={`${i}`} placeholder="Company Name">
                      <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                      </TextField.Slot>
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost">
                          <DotsHorizontalIcon height="14" width="14" />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              Color
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {["green", "blue", "teal", "red"].map((i) => (
                <Fragment key={`textfield-color-${i}`}>
                  <Flex align="center">
                    <Text>{i}</Text>
                  </Flex>
                  <Flex align="center">
                    <TextField.Root color={`${i}`} variant="soft" placeholder="Company Name">
                      <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                      </TextField.Slot>
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost">
                          <DotsHorizontalIcon height="14" width="14" />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              Radius
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {["none", "small", "medium", "large", "full"].map((i) => (
                <Fragment key={`textfield-radius-${i}`}>
                  <Flex align="center">
                    <Text>{i}</Text>
                  </Flex>
                  <Flex align="center">
                    <TextField.Root radius={`${i}`} placeholder="Company Name">
                      <TextField.Slot>
                        <MagnifyingGlassIcon height="16" width="16" />
                      </TextField.Slot>
                      <TextField.Slot>
                        <IconButton size="1" variant="ghost">
                          <DotsHorizontalIcon height="14" width="14" />
                        </IconButton>
                      </TextField.Slot>
                    </TextField.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Section>

      <Section px="5">
        <Box py="5">
          <Heading size="8">Select</Heading>
          <Text size={4}>Displays a list of options for the user to pick from—triggered by a button.</Text>
        </Box>

        <Grid columns="3" rows="auto">
          <Box>
            <Heading size="5">Size</Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {Array.from({ length: 3 }, (v, i) => i + 1).map((i) => (
                <Fragment key={`select-size-${i}`}>
                  <Flex align="center">
                    <Text>Size: {i}</Text>
                  </Flex>
                  <Flex align="center">
                    <Select.Root size={`${i}`} defaultValue="apple">
                      <Select.Trigger />
                      <Select.Content>
                        <Select.Group>
                          <Select.Label>Fruits</Select.Label>
                          <Select.Item value="orange">Orange</Select.Item>
                          <Select.Item value="apple">Apple</Select.Item>
                          <Select.Item value="grape" disabled>
                            Grape
                          </Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                          <Select.Label>Vegetables</Select.Label>
                          <Select.Item value="carrot">Carrot</Select.Item>
                          <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              With Icons
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {Array.from({ length: 3 }, (v, i) => i + 1).map((i) => (
                <Fragment key={`select-icons-${i}`}>
                  <Flex align="center">
                    <Text>Size: {i}</Text>
                  </Flex>
                  <Flex align="center">
                    <Select.Root size={`${i}`}>
                      <Select.Trigger placeholder="Pick a fruit" />
                      <Select.Content position="popper">
                        <Select.Group>
                          <Select.Label>Fruits</Select.Label>
                          <Select.Item value="orange">Orange</Select.Item>
                          <Select.Item value="apple">Apple</Select.Item>
                          <Select.Item value="grape" disabled>
                            Grape
                          </Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                          <Select.Label>Vegetables</Select.Label>
                          <Select.Item value="carrot">Carrot</Select.Item>
                          <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              Variant
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {["classic", "surface", "soft", "ghost"].map((i) => (
                <Fragment key={`select-variant-${i}`}>
                  <Flex align="center">
                    <Text>{i}</Text>
                  </Flex>
                  <Flex align="center">
                    <Select.Root defaultValue="apple">
                      <Select.Trigger variant={`${i}`} />
                      <Select.Content>
                        <Select.Group>
                          <Select.Label>Fruits</Select.Label>
                          <Select.Item value="orange">Orange</Select.Item>
                          <Select.Item value="apple">Apple</Select.Item>
                          <Select.Item value="grape" disabled>
                            Grape
                          </Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                          <Select.Label>Vegetables</Select.Label>
                          <Select.Item value="carrot">Carrot</Select.Item>
                          <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              Color
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {["green", "blue", "teal", "red"].map((i) => (
                <Fragment key={`select-color-${i}`}>
                  <Flex align="center">
                    <Text>{i}</Text>
                  </Flex>
                  <Flex align="center">
                    <Select.Root defaultValue="apple">
                      <Select.Trigger color={`${i}`} variant="soft" />
                      <Select.Content color={`${i}`}>
                        <Select.Group>
                          <Select.Label>Fruits</Select.Label>
                          <Select.Item value="orange">Orange</Select.Item>
                          <Select.Item value="apple">Apple</Select.Item>
                          <Select.Item value="grape" disabled>
                            Grape
                          </Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                          <Select.Label>Vegetables</Select.Label>
                          <Select.Item value="carrot">Carrot</Select.Item>
                          <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
          <Box>
            <Heading size="5" mt="4">
              Radius
            </Heading>
            <Grid columns="auto 1fr" rows="auto" flow="row" gap="4" py="4">
              {["none", "small", "medium", "large", "full"].map((i) => (
                <Fragment key={`select-radius-${i}`}>
                  <Flex align="center">
                    <Text>{i}</Text>
                  </Flex>
                  <Flex align="center">
                    <Select.Root defaultValue="apple">
                      <Select.Trigger radius={`${i}`} />
                      <Select.Content>
                        <Select.Group>
                          <Select.Label>Fruits</Select.Label>
                          <Select.Item value="orange">Orange</Select.Item>
                          <Select.Item value="apple">Apple</Select.Item>
                          <Select.Item value="grape" disabled>
                            Grape
                          </Select.Item>
                        </Select.Group>
                        <Select.Separator />
                        <Select.Group>
                          <Select.Label>Vegetables</Select.Label>
                          <Select.Item value="carrot">Carrot</Select.Item>
                          <Select.Item value="potato">Potato</Select.Item>
                        </Select.Group>
                      </Select.Content>
                    </Select.Root>
                  </Flex>
                </Fragment>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Section>
    </>
  );
}
